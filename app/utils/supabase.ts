
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const supabase = createClient("https://ywwgxrgqxkzadpuwjega.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3d2d4cmdxeGt6YWRwdXdqZWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwMDc3NTIsImV4cCI6MjAzMTU4Mzc1Mn0.4h_IQx1fohjp1OTPHivt1S5rePtzAPNdcAHLy6ghm64", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});