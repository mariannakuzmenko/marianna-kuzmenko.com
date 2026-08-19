CREATE TABLE public.briefings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  website text,
  location text,
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  files jsonb NOT NULL DEFAULT '[]'::jsonb,
  email_sent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.briefings TO service_role;

ALTER TABLE public.briefings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages briefings"
ON public.briefings FOR ALL TO service_role
USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can upload briefing files"
ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'briefing-uploads');