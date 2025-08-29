import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface BusinessInfo {
  name: string;
  location: string | null;
  schedule: string[] | null;
  number: string | null;
  slug: string;
}

export const useBusinessInfo = (slug?: string) => {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessInfo = async () => {
      try {
        let query = supabase
          .from('visitors')
          .select('name, location, schedule, number, slug');

        if (slug) {
          query = query.eq('slug', slug).single();
        } else {
          query = query.limit(1).single();
        }

        const { data, error } = await query;

        if (error) {
          throw error;
        }

        setBusinessInfo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch business info');
        // Fallback to default name
        setBusinessInfo({
          name: 'Premium Cuts',
          location: null,
          schedule: null,
          number: null,
          slug: 'premium-cuts',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessInfo();
  }, [slug]);

  return { businessInfo, loading, error };
};