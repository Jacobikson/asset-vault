// Wklej te same dane, których używasz w istniejącym Asset Vault.
// Klucz musi być publiczny anon — nie używaj service_role ani secret!
const SHARED_SUPABASE = {
  url: 'https://mekckqhruqoyvvuicxdy.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1la2NrcWhydXFveXZ2dWljeGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwODU3NDEsImV4cCI6MjEwOTY2MTc0MX0.ZgltiYET4sE_Xw8dNRNTCCvbWcHLb1UaFiebH2BV0hs'
};
window.VAULT_CONFIG = SHARED_SUPABASE;
window.HUB_CONFIG = SHARED_SUPABASE;
