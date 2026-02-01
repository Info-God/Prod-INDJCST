import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchLatestPublicationsForHome } from "../../../lib/axios/api/latestupdate";

interface Publication {
  title: string;
  id: string;
  ink: string;
}

interface ApiResponse {
  archives: string[];
  papers: Array<{
    paper_id: number;
    paper_title: string;
  }>;
}

export default function LatestPublication() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPublications = async () => {
      try {
        setLoading(true);
        const data: ApiResponse = await fetchLatestPublicationsForHome();
        const transformedData = data.papers.map((pub) => ({
          title: pub.paper_title,
          id: pub.paper_id.toString(),
          ink: `/archives/paper-details?paperid=${pub.paper_id}&papertitle=${encodeURIComponent(
            pub.paper_title
              .replace(/[^a-zA-Z0-9]+/g, "-")
              .replace(/-+/g, "-")
              .replace(/^-|-$/g, "")
              .toLowerCase()
          )}`
        }));
        
        setPublications(transformedData);
      } catch (err) {
        console.error("Error loading publications:", err);
        setError("Failed to load latest publications");
        setPublications([]); 
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  if (loading) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6 space-y-6 min-h-[400px] min-w-[330px]">
        <h2 className="text-center text-lg xl:text-xl capitalize font-semibold text-dark">
          Latest Publication
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-100 rounded animate-pulse w-1/2"></div>
              {i !== 3 && <hr className="border-gray-300 mt-2" />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6 space-y-6">
        <h2 className="text-center text-lg xl:text-xl capitalize font-semibold text-dark">
          Latest Publication
        </h2>
        <div className="text-center text-red-500 py-4">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6 space-y-6">
      <h2 className="text-center text-lg xl:text-xl capitalize font-semibold text-dark">
        Latest Publication
      </h2>

      {publications.length === 0 ? (
        <div className="text-center text-gray-500 py-4">
          No publications available
        </div>
      ) : (
        publications.map((pub, index) => (
          <div key={pub.id} className="space-y-2">
            <Link aria-label="link" to={pub.ink}>
              <h3 className="text-sm 2xl:text-base text-gray-800 line-clamp-2 hover:text-primary transition-colors">
                {pub.title}
              </h3>
              <h3 className="text-sm 2xl:text-base font-medium text-primary">
                Paper ID : {pub.id}
              </h3>
              {index !== publications.length - 1 && (
                <hr className="border-gray-300 mt-2" />
              )}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}