import { createClient } from "@supabase/supabase-js";
// import { createClient, SupabaseClient } from "@supabase/supabase-js";
// import type { AuthSession } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;


export const supabaseClient = createClient(supabaseUrl, supabaseKey);

// export type { AuthSession };

// declare global {
//     var __sba__: SupabaseClient;
//     namespace NodeJS {
//         interface ProcessEnv {
//             SUPABASE_URL: string;
//             SUPABASE_SERVICE_KEY: string;
//             SERVER_URL: string;

//         }
//     }
// }

// if(!process.env.SUPABASE_URL) {
//     throw new Error("SUPABASE_URL is not set");
// }
// if(!process.env.SUPABASE_SERVICE_KEY) {
//     throw new Error("SUPABASE_SERVICE_KEY is not set");
// }
// if(!process.env.SERVER_URL) throw new Error("SERVER_URL is notset");

// let supabaseAdmin: SupabaseClient;

// function getSupabaseAdmin() {
//     return createClient(
//         process.env.SUPABASE_URL,
//         process.env.SUPABASE_SERVICE_KEY,
//         { autoRefreshToken: false, persistSession: false }
//     );
// }

// if(process.env.NODE_ENV === 'production') {
//     supabaseAdmin = getSupabaseAdmin();
// } else {
//     if(!global.__sba__) {
//         global.__sba__ = getSupabaseAdmin();
//     }
//     supabaseAdmin = global.__sba__;
// }
// export { supabaseAdmin };
