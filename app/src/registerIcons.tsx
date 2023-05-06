import * as React from "react";
import { FontIcon } from "@fluentui/react/lib/Icon";
import { mergeStyles, registerIcons } from "@fluentui/react/lib/Styling";
import { defaultMaxListeners } from "stream";

// Use the registerIcons api from the styling package to register custom svg icons so that they
// can be used by the Icon component (or in anything that renders Icons, like Buttons).
const registerAllIcons = () => {
  registerIcons({
    icons: {
      killButtonIcon: (
        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
          <circle id="b" cx="1024" cy="1024" r="1024" fill="#cc9170" />
          <polygon
            id="c"
            points="974.63 328.99 1453.16 328.99 974.63 906.27 1422.78 906.27 594.84 1719.01 857.17 1121.26 594.84 1118.95 974.63 328.99"
            fill="#fcf892"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="21.33"
          />
        </svg>
      ),
      rainButtonIcon: (
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048.75 2048.75"
        >
          <path
            id="b"
            d="M414.35,427.11C-301.93,360.2,10.73,1532.11,600.07,1048.38c265.14,319.02,470.58,261.38,638.49,70,152.01,125.49,248.42,104.9,335.74-62.49,336.28,361.23,792.6-419.6,151.38-544.37,0-175.93-233.25-816.45-803.05-335.6-71.96-61.87-411.88-122.61-508.29,251.18Z"
            fill="#496d8f"
            stroke="#3a4a58"
            stroke-miterlimit="10"
            stroke-width=".75"
          />
          <path
            id="c"
            d="M1263.92,1274.75s-170.73,306.26,0,306.26,0-306.26,0-306.26Z"
            fill="#496d8f"
            stroke="#3a4a58"
            stroke-miterlimit="10"
            stroke-width=".75"
          />
          <path
            id="d"
            d="M1537.78,1532.63s-288.04,515.75,0,515.75c288.13,.1,0-515.75,0-515.75Z"
            fill="#496d8f"
            stroke="#3a4a58"
            stroke-miterlimit="10"
            stroke-width=".75"
          />
          <path
            id="e"
            d="M919,1427.93s-305.84,551.99,0,556.1c305.84,3.91,0-556.1,0-556.1Z"
            fill="#496d8f"
            stroke="#3a4a58"
            stroke-miterlimit="10"
            stroke-width=".75"
          />
          <path
            id="f"
            d="M529.11,1274.75s-172.64,326.54,0,326.54c172.64,0,0-326.54,0-326.54Z"
            fill="#496d8f"
            stroke="#3a4a58"
            stroke-miterlimit="10"
            stroke-width=".75"
          />
        </svg>
      ),
      sunButtonIcon: (
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2018.79 2018.79"
        >
          <ellipse
            id="b"
            cx="1006.36"
            cy="1011.43"
            rx="612.35"
            ry="607.97"
            fill="#d7bd61"
          />
          <path
            id="c"
            d="M40.88,1071.11c0,501.22,408.51,906.8,913.35,906.8"
            fill="none"
            stroke="#d7bd61"
            stroke-miterlimit="10"
            stroke-width="81.75"
          />
          <path
            id="d"
            d="M954.22,40.88C449.39,40.88,40.88,446.46,40.88,947.68"
            fill="none"
            stroke="#d7bd61"
            stroke-miterlimit="10"
            stroke-width="81.75"
          />
          <path
            id="e"
            d="M1977.91,947.68c0-501.22-408.51-906.8-913.35-906.8"
            fill="none"
            stroke="#d7bd61"
            stroke-miterlimit="10"
            stroke-width="81.75"
          />
          <path
            id="f"
            d="M1064.57,1977.91c504.84,0,913.35-405.58,913.35-906.8"
            fill="none"
            stroke="#d7bd61"
            stroke-miterlimit="10"
            stroke-width="81.75"
          />
          <path
            id="g"
            d="M555.57,373.71c553.04-331.78,1237.83,8.5,1237.83,637.72"
            fill="none"
            stroke="#d7bd61"
            stroke-miterlimit="10"
            stroke-width="69.96"
          />
          <path
            id="h"
            d="M1775.14,1160.34c0,432.28-638.82,843.29-1138.45,556.29"
            fill="none"
            stroke="#d7bd61"
            stroke-miterlimit="10"
            stroke-width="69.96"
          />
          <path
            id="i"
            d="M497.55,1619.4c-267.87-133.17-456.67-873.62-17.89-1192.51"
            fill="none"
            stroke="#d7bd61"
            stroke-miterlimit="10"
            stroke-width="69.96"
          />
        </svg>
      ),
      fertilizerButtonIcon: (
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2053.26 2053.26"
        >
          <path
            id="b"
            d="M82.44,38.97H1979.24l-138.39,664.83s106.61,672.48,73.27,809.36c52.03,117.32,86.98,263.04,65.13,346.87,49.17,56.87,44.23,114.72,0,137.3-44.23,22.58-1841.69,22.64-1896.79,0-55.1-22.64-60.76-72.89,0-137.3-21.14-133.39,49.73-245.86,97.69-354.09-35.04-112.98,37.74-678.25,62.63-792.19L82.44,38.97Z"
            fill="#faebd4"
            stroke="#ad9a7e"
            stroke-miterlimit="10"
            stroke-width="77.94"
          />
          <ellipse
            id="c"
            cx="1026.63"
            cy="1089.35"
            rx="551.58"
            ry="489.63"
            fill="#faebd4"
            stroke="#ad9a7e"
            stroke-miterlimit="10"
            stroke-width="97.42"
          />
          <path
            id="d"
            d="M910.81,802.39s-327.65,485.46,0,485.46,0-485.46,0-485.46Z"
            fill="#5d8f6e"
            stroke="#3f6c4e"
            stroke-miterlimit="10"
            stroke-width="42.56"
          />
          <path
            id="e"
            d="M1423.95,1148.66s-618.48-190.52-544.24,111.36c74.24,301.88,544.24-111.36,544.24-111.36Z"
            fill="#356043"
            stroke="#1a3623"
            stroke-miterlimit="10"
            stroke-width="38.97"
          />
        </svg>
      ),
    },
  });
};

export default registerAllIcons;
