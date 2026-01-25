import { X, Facebook, Linkedin, MessageCircle,  Copy, Check } from "lucide-react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

interface SharePopupProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

const SharePopup = ({ isOpen, onClose, url, title }: SharePopupProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    // Instagram doesn't support direct URL sharing via web
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-[90%] max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">Share Article</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Social Platform Buttons */}
          <div className="grid grid-cols-4 gap-4">
            {/* Twitter/X */}
            <button
              onClick={() => handleShare('twitter')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaXTwitter className="text-white" size={20} />
              </div>
              <span className="text-xs text-gray-600 font-medium">X</span>
            </button>

            {/* LinkedIn */}
            <button
              onClick={() => handleShare('linkedin')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="text-white" size={20} />
              </div>
              <span className="text-xs text-gray-600 font-medium">LinkedIn</span>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleShare('facebook')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="text-white" size={20} />
              </div>
              <span className="text-xs text-gray-600 font-medium">Facebook</span>
            </button>

            {/* WhatsApp */}
            <button
              onClick={() => handleShare('whatsapp')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="text-white" size={20} />
              </div>
              <span className="text-xs text-gray-600 font-medium">WhatsApp</span>
            </button>

            {/* Instagram Note */}
            {/* <div className="flex flex-col items-center gap-2 p-3 rounded-xl opacity-50 cursor-not-allowed">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] flex items-center justify-center">
                <Instagram className="text-white" size={20} />
              </div>
              <span className="text-xs text-gray-600 font-medium">Instagram</span>
            </div> */}
          </div>

          {/* Copy Link Section */}
          <div className="pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Or copy link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={url}
                readOnly
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  copied
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-primary hover:bg-primary/90 text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span className="hidden sm:inline">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Instagram Note */}
          <p className="text-xs text-gray-500 text-center">
            *Instagram doesn't support direct link sharing from web. Copy the link and share it in your Instagram story or post.
          </p>
        </div>
      </div>
    </>
  );
};

export default SharePopup;