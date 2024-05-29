import { useMemo } from "react";
import { useUserQuery } from "../api/useUserQuery";
import { generateRefLink } from "../utils/tg.utils";

export const useCopyReferralLinkToClipboard = () => {
  const { user } = useUserQuery();
  const refLink = useMemo(() => {
    if (user?.tg_id) {
      return generateRefLink(user.tg_id);
    }
    return "No user found";
  }, [user?.tg_id]);
  const copyToClipboard = async () => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(refLink);
    } else {
      return document.execCommand("copy", true, refLink);
    }
  };

  return { copyToClipboard, refLink };
};
