-- Run this in Supabase SQL Editor (Dashboard > SQL Editor)
-- Creates the marketing_leads table with INSERT-only RLS for anonymous users

CREATE TABLE IF NOT EXISTS marketing_leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE marketing_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts only (no select/update/delete)
CREATE POLICY "Allow anonymous inserts" ON marketing_leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow authenticated reads (for admin dashboard later)
CREATE POLICY "Allow authenticated reads" ON marketing_leads
  FOR SELECT TO authenticated
  USING (true);
