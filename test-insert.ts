import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function testInsert() {
    const { data, error } = await supabase.from('events').insert({
        title: 'Test Event from Node',
        description: 'Testing 400 bad request issue',
        date: new Date().toISOString(),
        location_name: 'Casa Agave',
        location_url: null,
        type: 'friday',
        price: 0,
        telegram_bot_link: null,
        cover_image_url: null,
    }).select();

    if (error) {
        console.error('INSERT ERROR:', JSON.stringify(error, null, 2));
    } else {
        console.log('INSERT SUCCESS:', data);
    }
}

testInsert();
