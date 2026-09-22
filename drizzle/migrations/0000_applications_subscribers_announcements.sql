CREATE TABLE public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  kind text NOT NULL CHECK (kind IN ('is','staj')),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  location text,
  position text,
  internship_type text,
  school text,
  subject text,
  message text,
  cv_path text,
  cv_filename text,
  created_at timestamptz NOT NULL DEFAULT now(),
  digest_sent_at timestamptz
);
CREATE INDEX applications_pending_idx ON public.applications (created_at) WHERE digest_sent_at IS NULL;
GRANT ALL ON public.applications TO service_role;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  is_active boolean NOT NULL DEFAULT true,
  unsubscribe_token uuid NOT NULL DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.subscribers TO service_role;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  summary text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'Duyuru',
  url text,
  is_published boolean NOT NULL DEFAULT true,
  notified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.announcements TO anon, authenticated;
GRANT ALL ON public.announcements TO service_role;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Yayindaki duyurular herkese acik" ON public.announcements
  FOR SELECT TO anon, authenticated USING (is_published);

CREATE TABLE public.job_locks (
  job_name text PRIMARY KEY,
  locked_until timestamptz NOT NULL
);
GRANT ALL ON public.job_locks TO service_role;
ALTER TABLE public.job_locks ENABLE ROW LEVEL SECURITY;