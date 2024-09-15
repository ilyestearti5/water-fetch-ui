import { allIcons, getFunction } from "@/apis";
import { AsyncComponent, Card, CircleLoading, CircleTip, DownOverlay, EmptyComponent, Line, Text } from "@/components";
import { closeApplications, useAsyncMemo, viewTemps } from "@/hooks";
const getApplications = getFunction<{ apps: { displayName: string; site: string }[] }, {}>("get-applications");
async function getSiteIcon(site: string) {
  try {
    // Fetch the HTML content of the website
    const response = await fetch(site);
    const html = await response.text();
    // Create a temporary DOM element to parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    // Find the <link> tags with rel attribute containing 'icon'
    const iconLink = doc.querySelector("link[rel~='icon']");
    // If an icon is found, return its href
    if (iconLink) {
      let iconHref = iconLink.getAttribute("href");
      // Handle relative paths
      if (!iconHref?.startsWith("http")) {
        const url = new URL(site);
        url.pathname == "/" + iconHref;
        url.search = "/";
        iconHref = url.href;
      }
      return iconHref;
    } else {
      return "No icon found";
    }
  } catch (error) {
    console.error("Error fetching the site icon:", error);
    return null;
  }
}
// Example usage
export const ApplicationsLayout = () => {
  const visibility = viewTemps.getTemp("applications");
  const applications = useAsyncMemo(async () => {
    return await getApplications({});
  }, []);
  return (
    <DownOverlay hidden={!visibility}>
      <Card>
        <div className="flex justify-between items-center p-2">
          <h1 className="text-3xl">
            <Text content="Water Fetch Application" />
          </h1>
          <span>
            <CircleTip
              icon={allIcons.solid.faXmark}
              onClick={() => {
                closeApplications();
              }}
            />
          </span>
        </div>
        <Line />
        <div className="flex flex-wrap justify-center gap-2 p-2">
          {applications?.apps.map(({ displayName, site }) => {
            const href = "https:// " + site;
            return (
              <a href={href} target="_blank" className="inline-block w-fit" key={site}>
                <Card className="w-full">
                  {/* <div className="inline-flex justify-center items-center rounded-xl w-[100px] h-[100px] overflow-hidden">
                    <AsyncComponent
                      loading={<CircleLoading />}
                      render={async () => {
                        const result = await getSiteIcon("https://" + site);
                        if (!result) {
                          return (
                            <EmptyComponent>
                              <span>App</span>
                            </EmptyComponent>
                          );
                        } else {
                          return <img src={result} alt="icon" className="w-full h-full object-cover" />;
                        }
                      }}
                    />
                  </div>
                  <Line /> */}
                  <p className="p-3 text-center text-xl">{displayName}</p>
                </Card>
              </a>
            );
          })}
        </div>
      </Card>
    </DownOverlay>
  );
};
