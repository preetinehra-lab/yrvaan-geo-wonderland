CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT,
  service TEXT,
  message TEXT NOT NULL,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- No public select/insert/update/delete policies. Service role bypasses RLS for server inserts.
-- Intentionally no policies for anon/authenticated roles to keep submissions private.

CREATE INDEX contact_submissions_created_at_idx ON public.contact_submissions (created_at DESC);