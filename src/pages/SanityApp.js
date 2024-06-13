import { renderStudio, Studio } from "sanity";
import sanityConfig from "../sanity/sanity.config";

const StudioApp = () => {
  //
  return (
    <div id="studio-app">
      <Studio config={sanityConfig} />
      {/* {renderStudio(document.getElementById("studio-app"), sanityConfig, {
        reactStrictMode: true,
        basePath: "/studio"
      })} */}
    </div>
  );
};

export default StudioApp;
