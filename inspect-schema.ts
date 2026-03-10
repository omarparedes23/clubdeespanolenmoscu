import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function inspectSchema() {
    const { data, error } = await supabase.from('events').select('*').limit(1);
    if (error) {
        console.error('SELECT ERROR:', error);
    } else {
        console.log('Got response!');
        if (data && data.length > 0) {
            console.log('COLUMNS:', Object.keys(data[0]));
            console.log('SAMPLE ROW:', data[0]);
        } else {
            console.log('Table is empty. Columns cannot be inferred from a select if it is empty, unfortunately.');
            // Let's try inserting a dummy row with just the required fields to see if "title" or "date" fails.
            const { error: err2 } = await supabase.from('events').insert({ title: 'test', date: new Date().toISOString() });
            console.log('Dummy insert error:', err2);
        }
    }
}

inspectSchema();
