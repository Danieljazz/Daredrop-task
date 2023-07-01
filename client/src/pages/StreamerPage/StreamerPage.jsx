import Navbar from "../../components/Navbar/Navbar";
import StreamerInfo from "../../components/StreamerInfo/StreamerInfo";
import "./streamerPage.scss";

const StreamerPage = () => {
  return (
    <div className="streamer-page">
      <Navbar />
      <div className="main-content">
        <StreamerInfo />
      </div>
      {/*Made using -> https://svgwave.in/ */}
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,100 0,100 C 47.41654951288693,105.05167098285855 94.83309902577386,110.10334196571709 143,108 C 191.16690097422614,105.89665803428291 240.08415340979155,96.63830311999014 302,96 C 363.91584659020845,95.36169688000986 438.8302873350599,103.34344555432236 494,101 C 549.1697126649401,98.65655444567764 584.5946972499692,85.98791466272043 630,88 C 675.4053027500308,90.01208533727957 730.7909236650637,106.70489579479592 785,102 C 839.2090763349363,97.29510420520408 892.2416080897767,71.19250215809592 948,77 C 1003.7583919102233,82.80749784190408 1062.2426439758294,120.52509557282033 1112,130 C 1161.7573560241706,139.47490442717967 1202.7878160069058,120.70711555062276 1256,111 C 1309.2121839930942,101.29288444937724 1374.606091996547,100.64644222468863 1440,100 C 1440,100 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#8900f8"
          fillOpacity="0.4"
        ></path>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 55.919842150696766,210.48883956098163 111.83968430139353,220.97767912196326 162,213 C 212.16031569860647,205.02232087803674 256.56110494512274,178.57812307312864 303,182 C 349.43889505487726,185.42187692687136 397.91589591811567,218.70982858552227 451,220 C 504.08410408188433,221.29017141447773 561.7753113824145,190.58256258478232 627,187 C 692.2246886175855,183.41743741521768 764.982858552226,206.95992107534838 824,209 C 883.017141447774,211.04007892465162 928.2932544086818,191.57775311382414 980,194 C 1031.7067455913182,196.42224688617586 1089.8441238130472,220.72906646935505 1144,231 C 1198.1558761869528,241.27093353064495 1248.3302503391294,237.5059810087557 1297,230 C 1345.6697496608706,222.4940189912443 1392.8348748304352,211.24700949562214 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#8900f8"
          fillOpacity="0.53"
        ></path>
        <path
          d="M 0,400 C 0,400 0,300 0,300 C 61.02380071525464,287.2537674189173 122.04760143050927,274.5075348378345 172,279 C 221.95239856949073,283.4924651621655 260.8333949932175,305.2236280675792 319,319 C 377.1666050067825,332.7763719324208 454.61881859662094,338.59795289184854 507,329 C 559.3811814033791,319.40204710815146 586.6913306202985,294.3845603650265 635,290 C 683.3086693797015,285.6154396349735 752.6158589221852,301.86380564804546 811,302 C 869.3841410778148,302.13619435195454 916.8452336909606,286.16021704279194 974,293 C 1031.1547663090394,299.83978295720806 1098.0032063139722,329.4953261807868 1142,323 C 1185.9967936860278,316.5046738192132 1207.1419410531507,273.8584782340609 1253,264 C 1298.8580589468493,254.1415217659391 1369.4290294734246,277.0707608829696 1440,300 C 1440,300 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#8900f8"
          fillOpacity="1"
        ></path>
      </svg>
    </div>
  );
};

export default StreamerPage;
