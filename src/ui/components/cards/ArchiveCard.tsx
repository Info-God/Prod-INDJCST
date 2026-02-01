import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { fetchArchivesForHome } from '../../../lib/axios/api/latestupdate';

interface ArchiveApiResponse {
  archives: string[];
  papers: Array<{
    paper_id: number;
    paper_title: string;
  }>;
}

export default function ArchiveCard() {
  const [archives, setArchives] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArchives = async () => {
      try {
        setLoading(true);
        setError(null);  
        const response = await fetchArchivesForHome();
        const data = response as ArchiveApiResponse;
        if (data.archives && Array.isArray(data.archives)) {
          setArchives(data.archives);
        } else {
          console.warn('Unexpected API response format missing archives array:', response);
          setArchives([]);
        }
      } catch (err) {
        console.error('Failed to fetch archives:', err);
        setError('Failed to load archive data please try again later');
        setArchives([]);
      } finally {
        setLoading(false);
      }
    };

    loadArchives();
  }, []);

  if (loading) {
    return (
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6">
        <h3 className="text-center text-lg 2xl:text-xl capitalize font-semibold text-black mb-4">
          Archive
        </h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
        <div className="mt-6">
          <button className="w-full primaryBtn opacity-50 cursor-not-allowed" disabled>
            Loading...
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6">
        <h3 className="text-center text-lg 2xl:text-xl capitalize font-semibold text-black mb-4">
          Archive
        </h3>
        <div className="text-center text-red-500 py-4 text-sm">{error}</div>
        <div className="mt-6">
          <button 
            className="w-full primaryBtn flex items-center justify-center gap-2"
            onClick={() => window.location.reload()}
          >
            Retry
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6">
      <h3 className="text-center text-lg 2xl:text-xl capitalize font-semibold text-black mb-4">
        Archive
      </h3>
      
      {archives.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No archives available at the moment.</p>
      ) : (
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm 2xl:text-base">
          {archives.map((entry, index) => (
            <li 
              key={index}
              className=""
            >
              {entry}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <NavLink to="/current-issue">
          <button className="w-full primaryBtn flex items-center justify-center gap-2">
            View More
            <ArrowRight size={16} />
          </button>
        </NavLink>
      </div>
    </div>
  );
}