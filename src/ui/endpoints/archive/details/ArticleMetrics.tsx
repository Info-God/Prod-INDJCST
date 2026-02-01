import useDimensionsBadge from "../../../components/cards/plumx/useDimensionsBadge";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../lib/store/store";
import { fetchPaperViewsThunk } from "../../../../lib/store/Features/ArchiveSlice";

  const ArticleMetrics = ({ content, paperId }: { content?: string, paperId?: number }) => {
  const dispatch = useDispatch();
  const paperViews = useSelector((state: RootState) =>
    paperId ? state.archiveSection?.paperViews?.[paperId] : null
  );
  const doi = content!==undefined ? content.split("https://www.doi.org/")[1]: ""
  useDimensionsBadge()

  useEffect(() => {
    if (paperId) {
      (dispatch as any)(fetchPaperViewsThunk(paperId));
    }
  }, [dispatch, paperId]);

  const metrics = [
    {label: "Views",value: paperViews?.isLoading ? "..." : (paperViews?.total_views || 0).toString(),to: "to-cyan-700", from: "from-cyan-500"},
    {label: "Citations",value: "0",to: "to-red-700",from: "from-red-500" },
  ];

  return (
    <div className="min-h-72">
      <h2 className="text-base xl:text-xl 2xl:text-3xl font-semibold text-gray-700 mb-6">Article Metrics</h2>
      <div className="flex flex-wrap justify-between gap-10">
        {metrics.map((metric, index) => (
          <div key={index} className="grid items-center text-center">
            <div
              className={`bg-gradient-to-b ${metric.from} ${metric.to} text-white  font-semibold w-42 h-24 flex items-center justify-center rounded-md shadow py-2`}
            >
              {metric.value}
            </div>
            {/* <span className="mt-2 text-sm xl:text-base 2xl:text-lg text-gray-800"></span> */}
            <span className="text-base font-medium text-primary-text mt-4">{metric.label}</span>

          </div>
        ))}

        {(content!==undefined && content.length > 5 )?
          <>
            <div className="flex flex-col items-center justify-between gap-4 py-2">
              <a aria-label="link" href={`https://plu.mx/plum/a/?doi=${doi}`} data-size="large" className="plumx-plum-print-popup"></a>
              <script type="text/javascript" src="//cdn.plu.mx/widget-popup.js"></script>
              <span className="text-base font-medium text-primary-text">PlumX Metrics</span>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 py-2">
              <span className="__dimensions_badge_embed__" data-doi={doi}></span>
              <span className="text-base font-medium text-primary-text">Dimension</span>
            </div>
          </>
          :
          <>
            <div className="flex flex-col items-center justify-between gap-4 py-2">
              <img
                src="/plummatrix/plum.webp"
                alt="PlumX Metrics"
                className="max-h-28 object-contain"
              />
              <span className="text-base font-medium text-primary-text">PlumX Metrics</span>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 py-2">
              <img
                src="/plummatrix/dynamics.webp" // Replace with actual path
                alt="Dimension"
                  className="max-h-28 object-contain"
              />
              <span className="text-base font-medium text-primary-text">Dimension</span>
            </div>
          </>
        }
      </div>

    </div>
  );
};

export default ArticleMetrics;
