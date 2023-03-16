import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { withRouter } from 'react-router-dom';


function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);