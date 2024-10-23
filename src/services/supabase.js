import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iqvrajdacthkopbozpeo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxdnJhamRhY3Roa29wYm96cGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2NDMyMDAsImV4cCI6MjA0NTIxOTIwMH0.GR8po_OeaILA6ETYLIPAstJI8TT_KWlK58M3yE2jpqQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
