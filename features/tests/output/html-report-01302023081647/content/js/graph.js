/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 103.0, "minX": 0.0, "maxY": 1858.0, "series": [{"data": [[0.0, 103.0], [0.1, 104.0], [0.2, 104.0], [0.3, 104.0], [0.4, 104.0], [0.5, 104.0], [0.6, 105.0], [0.7, 105.0], [0.8, 105.0], [0.9, 105.0], [1.0, 105.0], [1.1, 105.0], [1.2, 105.0], [1.3, 105.0], [1.4, 105.0], [1.5, 105.0], [1.6, 105.0], [1.7, 105.0], [1.8, 105.0], [1.9, 105.0], [2.0, 105.0], [2.1, 105.0], [2.2, 105.0], [2.3, 105.0], [2.4, 105.0], [2.5, 105.0], [2.6, 105.0], [2.7, 105.0], [2.8, 105.0], [2.9, 105.0], [3.0, 106.0], [3.1, 106.0], [3.2, 106.0], [3.3, 106.0], [3.4, 106.0], [3.5, 106.0], [3.6, 106.0], [3.7, 106.0], [3.8, 106.0], [3.9, 106.0], [4.0, 106.0], [4.1, 106.0], [4.2, 106.0], [4.3, 106.0], [4.4, 106.0], [4.5, 106.0], [4.6, 106.0], [4.7, 106.0], [4.8, 106.0], [4.9, 106.0], [5.0, 106.0], [5.1, 106.0], [5.2, 106.0], [5.3, 106.0], [5.4, 106.0], [5.5, 106.0], [5.6, 106.0], [5.7, 106.0], [5.8, 106.0], [5.9, 106.0], [6.0, 106.0], [6.1, 106.0], [6.2, 106.0], [6.3, 106.0], [6.4, 106.0], [6.5, 106.0], [6.6, 106.0], [6.7, 106.0], [6.8, 106.0], [6.9, 107.0], [7.0, 107.0], [7.1, 107.0], [7.2, 107.0], [7.3, 107.0], [7.4, 107.0], [7.5, 107.0], [7.6, 107.0], [7.7, 107.0], [7.8, 107.0], [7.9, 107.0], [8.0, 107.0], [8.1, 107.0], [8.2, 107.0], [8.3, 107.0], [8.4, 107.0], [8.5, 107.0], [8.6, 107.0], [8.7, 107.0], [8.8, 107.0], [8.9, 107.0], [9.0, 107.0], [9.1, 107.0], [9.2, 107.0], [9.3, 107.0], [9.4, 107.0], [9.5, 107.0], [9.6, 107.0], [9.7, 107.0], [9.8, 107.0], [9.9, 107.0], [10.0, 107.0], [10.1, 107.0], [10.2, 107.0], [10.3, 107.0], [10.4, 107.0], [10.5, 107.0], [10.6, 107.0], [10.7, 107.0], [10.8, 107.0], [10.9, 107.0], [11.0, 107.0], [11.1, 107.0], [11.2, 107.0], [11.3, 107.0], [11.4, 107.0], [11.5, 107.0], [11.6, 107.0], [11.7, 107.0], [11.8, 107.0], [11.9, 107.0], [12.0, 107.0], [12.1, 107.0], [12.2, 108.0], [12.3, 108.0], [12.4, 108.0], [12.5, 108.0], [12.6, 108.0], [12.7, 108.0], [12.8, 108.0], [12.9, 108.0], [13.0, 108.0], [13.1, 108.0], [13.2, 108.0], [13.3, 108.0], [13.4, 108.0], [13.5, 108.0], [13.6, 108.0], [13.7, 108.0], [13.8, 108.0], [13.9, 108.0], [14.0, 108.0], [14.1, 108.0], [14.2, 108.0], [14.3, 108.0], [14.4, 108.0], [14.5, 108.0], [14.6, 108.0], [14.7, 108.0], [14.8, 108.0], [14.9, 108.0], [15.0, 108.0], [15.1, 108.0], [15.2, 108.0], [15.3, 108.0], [15.4, 108.0], [15.5, 108.0], [15.6, 108.0], [15.7, 108.0], [15.8, 108.0], [15.9, 108.0], [16.0, 108.0], [16.1, 108.0], [16.2, 108.0], [16.3, 108.0], [16.4, 108.0], [16.5, 108.0], [16.6, 108.0], [16.7, 108.0], [16.8, 108.0], [16.9, 109.0], [17.0, 109.0], [17.1, 109.0], [17.2, 109.0], [17.3, 109.0], [17.4, 109.0], [17.5, 109.0], [17.6, 109.0], [17.7, 109.0], [17.8, 109.0], [17.9, 109.0], [18.0, 109.0], [18.1, 109.0], [18.2, 109.0], [18.3, 109.0], [18.4, 109.0], [18.5, 109.0], [18.6, 109.0], [18.7, 109.0], [18.8, 109.0], [18.9, 109.0], [19.0, 109.0], [19.1, 109.0], [19.2, 109.0], [19.3, 109.0], [19.4, 109.0], [19.5, 109.0], [19.6, 109.0], [19.7, 109.0], [19.8, 109.0], [19.9, 109.0], [20.0, 109.0], [20.1, 109.0], [20.2, 109.0], [20.3, 109.0], [20.4, 109.0], [20.5, 109.0], [20.6, 109.0], [20.7, 109.0], [20.8, 109.0], [20.9, 109.0], [21.0, 109.0], [21.1, 109.0], [21.2, 109.0], [21.3, 109.0], [21.4, 110.0], [21.5, 110.0], [21.6, 110.0], [21.7, 110.0], [21.8, 110.0], [21.9, 110.0], [22.0, 110.0], [22.1, 110.0], [22.2, 110.0], [22.3, 110.0], [22.4, 110.0], [22.5, 110.0], [22.6, 110.0], [22.7, 110.0], [22.8, 110.0], [22.9, 110.0], [23.0, 110.0], [23.1, 110.0], [23.2, 110.0], [23.3, 110.0], [23.4, 110.0], [23.5, 110.0], [23.6, 110.0], [23.7, 110.0], [23.8, 110.0], [23.9, 110.0], [24.0, 110.0], [24.1, 110.0], [24.2, 110.0], [24.3, 111.0], [24.4, 111.0], [24.5, 111.0], [24.6, 111.0], [24.7, 111.0], [24.8, 111.0], [24.9, 111.0], [25.0, 111.0], [25.1, 111.0], [25.2, 111.0], [25.3, 111.0], [25.4, 111.0], [25.5, 111.0], [25.6, 111.0], [25.7, 111.0], [25.8, 111.0], [25.9, 111.0], [26.0, 111.0], [26.1, 111.0], [26.2, 111.0], [26.3, 111.0], [26.4, 111.0], [26.5, 111.0], [26.6, 112.0], [26.7, 112.0], [26.8, 112.0], [26.9, 112.0], [27.0, 112.0], [27.1, 112.0], [27.2, 112.0], [27.3, 112.0], [27.4, 112.0], [27.5, 112.0], [27.6, 112.0], [27.7, 112.0], [27.8, 112.0], [27.9, 112.0], [28.0, 112.0], [28.1, 112.0], [28.2, 112.0], [28.3, 112.0], [28.4, 112.0], [28.5, 112.0], [28.6, 112.0], [28.7, 112.0], [28.8, 113.0], [28.9, 113.0], [29.0, 113.0], [29.1, 113.0], [29.2, 113.0], [29.3, 113.0], [29.4, 113.0], [29.5, 113.0], [29.6, 113.0], [29.7, 113.0], [29.8, 113.0], [29.9, 113.0], [30.0, 113.0], [30.1, 113.0], [30.2, 113.0], [30.3, 113.0], [30.4, 113.0], [30.5, 113.0], [30.6, 113.0], [30.7, 113.0], [30.8, 113.0], [30.9, 113.0], [31.0, 114.0], [31.1, 114.0], [31.2, 114.0], [31.3, 114.0], [31.4, 114.0], [31.5, 114.0], [31.6, 114.0], [31.7, 114.0], [31.8, 114.0], [31.9, 114.0], [32.0, 114.0], [32.1, 114.0], [32.2, 114.0], [32.3, 114.0], [32.4, 114.0], [32.5, 114.0], [32.6, 114.0], [32.7, 114.0], [32.8, 114.0], [32.9, 114.0], [33.0, 114.0], [33.1, 114.0], [33.2, 114.0], [33.3, 114.0], [33.4, 115.0], [33.5, 115.0], [33.6, 115.0], [33.7, 115.0], [33.8, 115.0], [33.9, 115.0], [34.0, 115.0], [34.1, 115.0], [34.2, 115.0], [34.3, 115.0], [34.4, 115.0], [34.5, 115.0], [34.6, 115.0], [34.7, 115.0], [34.8, 115.0], [34.9, 115.0], [35.0, 115.0], [35.1, 115.0], [35.2, 115.0], [35.3, 115.0], [35.4, 115.0], [35.5, 115.0], [35.6, 115.0], [35.7, 115.0], [35.8, 115.0], [35.9, 116.0], [36.0, 116.0], [36.1, 116.0], [36.2, 116.0], [36.3, 116.0], [36.4, 116.0], [36.5, 116.0], [36.6, 116.0], [36.7, 116.0], [36.8, 116.0], [36.9, 116.0], [37.0, 116.0], [37.1, 116.0], [37.2, 116.0], [37.3, 116.0], [37.4, 116.0], [37.5, 116.0], [37.6, 116.0], [37.7, 116.0], [37.8, 116.0], [37.9, 116.0], [38.0, 116.0], [38.1, 116.0], [38.2, 116.0], [38.3, 116.0], [38.4, 116.0], [38.5, 116.0], [38.6, 117.0], [38.7, 117.0], [38.8, 117.0], [38.9, 117.0], [39.0, 117.0], [39.1, 117.0], [39.2, 117.0], [39.3, 117.0], [39.4, 117.0], [39.5, 117.0], [39.6, 117.0], [39.7, 117.0], [39.8, 117.0], [39.9, 117.0], [40.0, 117.0], [40.1, 117.0], [40.2, 117.0], [40.3, 117.0], [40.4, 117.0], [40.5, 117.0], [40.6, 117.0], [40.7, 117.0], [40.8, 117.0], [40.9, 118.0], [41.0, 118.0], [41.1, 118.0], [41.2, 118.0], [41.3, 118.0], [41.4, 118.0], [41.5, 118.0], [41.6, 118.0], [41.7, 118.0], [41.8, 118.0], [41.9, 118.0], [42.0, 118.0], [42.1, 118.0], [42.2, 118.0], [42.3, 118.0], [42.4, 118.0], [42.5, 118.0], [42.6, 118.0], [42.7, 118.0], [42.8, 118.0], [42.9, 118.0], [43.0, 118.0], [43.1, 118.0], [43.2, 118.0], [43.3, 118.0], [43.4, 118.0], [43.5, 118.0], [43.6, 118.0], [43.7, 118.0], [43.8, 118.0], [43.9, 118.0], [44.0, 118.0], [44.1, 119.0], [44.2, 119.0], [44.3, 119.0], [44.4, 119.0], [44.5, 119.0], [44.6, 119.0], [44.7, 119.0], [44.8, 119.0], [44.9, 119.0], [45.0, 119.0], [45.1, 119.0], [45.2, 119.0], [45.3, 119.0], [45.4, 119.0], [45.5, 119.0], [45.6, 119.0], [45.7, 119.0], [45.8, 119.0], [45.9, 119.0], [46.0, 119.0], [46.1, 119.0], [46.2, 119.0], [46.3, 119.0], [46.4, 119.0], [46.5, 119.0], [46.6, 119.0], [46.7, 119.0], [46.8, 119.0], [46.9, 119.0], [47.0, 119.0], [47.1, 119.0], [47.2, 119.0], [47.3, 119.0], [47.4, 119.0], [47.5, 119.0], [47.6, 120.0], [47.7, 120.0], [47.8, 120.0], [47.9, 120.0], [48.0, 120.0], [48.1, 120.0], [48.2, 120.0], [48.3, 120.0], [48.4, 120.0], [48.5, 120.0], [48.6, 120.0], [48.7, 120.0], [48.8, 120.0], [48.9, 120.0], [49.0, 120.0], [49.1, 120.0], [49.2, 120.0], [49.3, 120.0], [49.4, 120.0], [49.5, 120.0], [49.6, 120.0], [49.7, 120.0], [49.8, 120.0], [49.9, 120.0], [50.0, 120.0], [50.1, 120.0], [50.2, 120.0], [50.3, 120.0], [50.4, 120.0], [50.5, 120.0], [50.6, 120.0], [50.7, 121.0], [50.8, 121.0], [50.9, 121.0], [51.0, 121.0], [51.1, 121.0], [51.2, 121.0], [51.3, 121.0], [51.4, 121.0], [51.5, 121.0], [51.6, 121.0], [51.7, 121.0], [51.8, 121.0], [51.9, 121.0], [52.0, 121.0], [52.1, 121.0], [52.2, 121.0], [52.3, 121.0], [52.4, 121.0], [52.5, 121.0], [52.6, 121.0], [52.7, 121.0], [52.8, 121.0], [52.9, 121.0], [53.0, 121.0], [53.1, 121.0], [53.2, 121.0], [53.3, 121.0], [53.4, 121.0], [53.5, 121.0], [53.6, 122.0], [53.7, 122.0], [53.8, 122.0], [53.9, 122.0], [54.0, 122.0], [54.1, 122.0], [54.2, 122.0], [54.3, 122.0], [54.4, 122.0], [54.5, 122.0], [54.6, 122.0], [54.7, 122.0], [54.8, 122.0], [54.9, 122.0], [55.0, 122.0], [55.1, 122.0], [55.2, 122.0], [55.3, 122.0], [55.4, 122.0], [55.5, 122.0], [55.6, 122.0], [55.7, 122.0], [55.8, 122.0], [55.9, 123.0], [56.0, 123.0], [56.1, 123.0], [56.2, 123.0], [56.3, 123.0], [56.4, 123.0], [56.5, 123.0], [56.6, 123.0], [56.7, 123.0], [56.8, 123.0], [56.9, 123.0], [57.0, 123.0], [57.1, 123.0], [57.2, 123.0], [57.3, 123.0], [57.4, 123.0], [57.5, 123.0], [57.6, 123.0], [57.7, 123.0], [57.8, 123.0], [57.9, 123.0], [58.0, 123.0], [58.1, 123.0], [58.2, 124.0], [58.3, 124.0], [58.4, 124.0], [58.5, 124.0], [58.6, 124.0], [58.7, 124.0], [58.8, 124.0], [58.9, 124.0], [59.0, 124.0], [59.1, 124.0], [59.2, 124.0], [59.3, 124.0], [59.4, 124.0], [59.5, 124.0], [59.6, 124.0], [59.7, 124.0], [59.8, 124.0], [59.9, 124.0], [60.0, 124.0], [60.1, 124.0], [60.2, 124.0], [60.3, 124.0], [60.4, 124.0], [60.5, 124.0], [60.6, 124.0], [60.7, 124.0], [60.8, 124.0], [60.9, 124.0], [61.0, 124.0], [61.1, 124.0], [61.2, 124.0], [61.3, 124.0], [61.4, 125.0], [61.5, 125.0], [61.6, 125.0], [61.7, 125.0], [61.8, 125.0], [61.9, 125.0], [62.0, 125.0], [62.1, 125.0], [62.2, 125.0], [62.3, 125.0], [62.4, 125.0], [62.5, 125.0], [62.6, 125.0], [62.7, 125.0], [62.8, 125.0], [62.9, 125.0], [63.0, 125.0], [63.1, 125.0], [63.2, 125.0], [63.3, 125.0], [63.4, 125.0], [63.5, 125.0], [63.6, 125.0], [63.7, 125.0], [63.8, 125.0], [63.9, 126.0], [64.0, 126.0], [64.1, 126.0], [64.2, 126.0], [64.3, 126.0], [64.4, 126.0], [64.5, 126.0], [64.6, 126.0], [64.7, 126.0], [64.8, 126.0], [64.9, 126.0], [65.0, 126.0], [65.1, 126.0], [65.2, 126.0], [65.3, 126.0], [65.4, 126.0], [65.5, 126.0], [65.6, 126.0], [65.7, 126.0], [65.8, 126.0], [65.9, 126.0], [66.0, 126.0], [66.1, 126.0], [66.2, 126.0], [66.3, 126.0], [66.4, 126.0], [66.5, 126.0], [66.6, 126.0], [66.7, 126.0], [66.8, 126.0], [66.9, 127.0], [67.0, 127.0], [67.1, 127.0], [67.2, 127.0], [67.3, 127.0], [67.4, 127.0], [67.5, 127.0], [67.6, 127.0], [67.7, 127.0], [67.8, 127.0], [67.9, 127.0], [68.0, 127.0], [68.1, 127.0], [68.2, 127.0], [68.3, 127.0], [68.4, 127.0], [68.5, 127.0], [68.6, 127.0], [68.7, 127.0], [68.8, 127.0], [68.9, 127.0], [69.0, 127.0], [69.1, 127.0], [69.2, 127.0], [69.3, 127.0], [69.4, 127.0], [69.5, 127.0], [69.6, 127.0], [69.7, 127.0], [69.8, 127.0], [69.9, 127.0], [70.0, 128.0], [70.1, 128.0], [70.2, 128.0], [70.3, 128.0], [70.4, 128.0], [70.5, 128.0], [70.6, 128.0], [70.7, 128.0], [70.8, 128.0], [70.9, 128.0], [71.0, 128.0], [71.1, 128.0], [71.2, 128.0], [71.3, 128.0], [71.4, 128.0], [71.5, 128.0], [71.6, 128.0], [71.7, 128.0], [71.8, 128.0], [71.9, 128.0], [72.0, 128.0], [72.1, 128.0], [72.2, 128.0], [72.3, 129.0], [72.4, 129.0], [72.5, 129.0], [72.6, 129.0], [72.7, 129.0], [72.8, 129.0], [72.9, 129.0], [73.0, 129.0], [73.1, 129.0], [73.2, 129.0], [73.3, 129.0], [73.4, 129.0], [73.5, 129.0], [73.6, 129.0], [73.7, 129.0], [73.8, 129.0], [73.9, 129.0], [74.0, 129.0], [74.1, 129.0], [74.2, 129.0], [74.3, 129.0], [74.4, 129.0], [74.5, 130.0], [74.6, 130.0], [74.7, 130.0], [74.8, 130.0], [74.9, 130.0], [75.0, 130.0], [75.1, 130.0], [75.2, 130.0], [75.3, 130.0], [75.4, 130.0], [75.5, 130.0], [75.6, 130.0], [75.7, 130.0], [75.8, 130.0], [75.9, 130.0], [76.0, 130.0], [76.1, 130.0], [76.2, 130.0], [76.3, 130.0], [76.4, 130.0], [76.5, 131.0], [76.6, 131.0], [76.7, 131.0], [76.8, 131.0], [76.9, 131.0], [77.0, 131.0], [77.1, 131.0], [77.2, 131.0], [77.3, 131.0], [77.4, 131.0], [77.5, 131.0], [77.6, 131.0], [77.7, 131.0], [77.8, 131.0], [77.9, 131.0], [78.0, 131.0], [78.1, 132.0], [78.2, 132.0], [78.3, 132.0], [78.4, 132.0], [78.5, 132.0], [78.6, 132.0], [78.7, 132.0], [78.8, 132.0], [78.9, 132.0], [79.0, 132.0], [79.1, 132.0], [79.2, 132.0], [79.3, 132.0], [79.4, 132.0], [79.5, 132.0], [79.6, 132.0], [79.7, 132.0], [79.8, 132.0], [79.9, 132.0], [80.0, 132.0], [80.1, 133.0], [80.2, 133.0], [80.3, 133.0], [80.4, 133.0], [80.5, 133.0], [80.6, 133.0], [80.7, 133.0], [80.8, 133.0], [80.9, 133.0], [81.0, 133.0], [81.1, 133.0], [81.2, 133.0], [81.3, 134.0], [81.4, 134.0], [81.5, 134.0], [81.6, 134.0], [81.7, 134.0], [81.8, 134.0], [81.9, 134.0], [82.0, 134.0], [82.1, 134.0], [82.2, 135.0], [82.3, 135.0], [82.4, 135.0], [82.5, 135.0], [82.6, 135.0], [82.7, 135.0], [82.8, 135.0], [82.9, 135.0], [83.0, 135.0], [83.1, 135.0], [83.2, 135.0], [83.3, 136.0], [83.4, 136.0], [83.5, 136.0], [83.6, 136.0], [83.7, 136.0], [83.8, 136.0], [83.9, 136.0], [84.0, 136.0], [84.1, 136.0], [84.2, 136.0], [84.3, 137.0], [84.4, 137.0], [84.5, 137.0], [84.6, 137.0], [84.7, 137.0], [84.8, 137.0], [84.9, 137.0], [85.0, 138.0], [85.1, 138.0], [85.2, 138.0], [85.3, 138.0], [85.4, 139.0], [85.5, 139.0], [85.6, 139.0], [85.7, 139.0], [85.8, 139.0], [85.9, 139.0], [86.0, 139.0], [86.1, 139.0], [86.2, 140.0], [86.3, 140.0], [86.4, 140.0], [86.5, 140.0], [86.6, 141.0], [86.7, 141.0], [86.8, 141.0], [86.9, 141.0], [87.0, 141.0], [87.1, 142.0], [87.2, 142.0], [87.3, 143.0], [87.4, 144.0], [87.5, 144.0], [87.6, 145.0], [87.7, 145.0], [87.8, 146.0], [87.9, 146.0], [88.0, 148.0], [88.1, 148.0], [88.2, 149.0], [88.3, 150.0], [88.4, 150.0], [88.5, 151.0], [88.6, 151.0], [88.7, 151.0], [88.8, 152.0], [88.9, 152.0], [89.0, 152.0], [89.1, 153.0], [89.2, 154.0], [89.3, 154.0], [89.4, 156.0], [89.5, 158.0], [89.6, 162.0], [89.7, 164.0], [89.8, 165.0], [89.9, 166.0], [90.0, 168.0], [90.1, 168.0], [90.2, 174.0], [90.3, 175.0], [90.4, 179.0], [90.5, 185.0], [90.6, 186.0], [90.7, 193.0], [90.8, 196.0], [90.9, 198.0], [91.0, 200.0], [91.1, 201.0], [91.2, 204.0], [91.3, 213.0], [91.4, 214.0], [91.5, 223.0], [91.6, 223.0], [91.7, 227.0], [91.8, 228.0], [91.9, 236.0], [92.0, 254.0], [92.1, 306.0], [92.2, 323.0], [92.3, 333.0], [92.4, 362.0], [92.5, 366.0], [92.6, 370.0], [92.7, 374.0], [92.8, 384.0], [92.9, 414.0], [93.0, 431.0], [93.1, 432.0], [93.2, 434.0], [93.3, 435.0], [93.4, 437.0], [93.5, 438.0], [93.6, 439.0], [93.7, 443.0], [93.8, 443.0], [93.9, 444.0], [94.0, 447.0], [94.1, 447.0], [94.2, 451.0], [94.3, 454.0], [94.4, 458.0], [94.5, 459.0], [94.6, 459.0], [94.7, 466.0], [94.8, 467.0], [94.9, 472.0], [95.0, 477.0], [95.1, 477.0], [95.2, 479.0], [95.3, 480.0], [95.4, 482.0], [95.5, 484.0], [95.6, 486.0], [95.7, 488.0], [95.8, 488.0], [95.9, 490.0], [96.0, 493.0], [96.1, 494.0], [96.2, 496.0], [96.3, 496.0], [96.4, 497.0], [96.5, 501.0], [96.6, 507.0], [96.7, 508.0], [96.8, 511.0], [96.9, 513.0], [97.0, 515.0], [97.1, 515.0], [97.2, 518.0], [97.3, 518.0], [97.4, 522.0], [97.5, 523.0], [97.6, 527.0], [97.7, 531.0], [97.8, 532.0], [97.9, 538.0], [98.0, 543.0], [98.1, 546.0], [98.2, 552.0], [98.3, 552.0], [98.4, 560.0], [98.5, 584.0], [98.6, 594.0], [98.7, 626.0], [98.8, 637.0], [98.9, 746.0], [99.0, 760.0], [99.1, 765.0], [99.2, 856.0], [99.3, 867.0], [99.4, 898.0], [99.5, 923.0], [99.6, 937.0], [99.7, 1444.0], [99.8, 1448.0], [99.9, 1534.0]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1454.0, "series": [{"data": [[600.0, 3.0], [700.0, 6.0], [800.0, 4.0], [200.0, 17.0], [900.0, 3.0], [1000.0, 1.0], [300.0, 12.0], [1400.0, 2.0], [1500.0, 2.0], [400.0, 59.0], [100.0, 1454.0], [1800.0, 1.0], [500.0, 34.0]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 1542.0, "series": [{"data": [[0.0, 1542.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 53.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 96.12306558585115, "minX": 1.67506296E12, "maxY": 100.0, "series": [{"data": [[1.67506296E12, 100.0], [1.67506302E12, 96.12306558585115]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506302E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 104.0, "minX": 1.0, "maxY": 626.0, "series": [{"data": [[2.0, 108.0], [3.0, 125.0], [4.0, 126.0], [5.0, 116.0], [6.0, 110.0], [8.0, 120.0], [9.0, 129.0], [11.0, 301.5], [12.0, 197.0], [13.0, 129.0], [14.0, 125.0], [15.0, 125.0], [16.0, 626.0], [17.0, 131.0], [18.0, 126.0], [19.0, 106.0], [20.0, 117.0], [21.0, 130.0], [22.0, 111.0], [23.0, 127.0], [24.0, 124.0], [25.0, 113.0], [26.0, 110.0], [27.0, 107.0], [28.0, 112.0], [29.0, 132.0], [30.0, 193.0], [31.0, 106.0], [33.0, 128.0], [32.0, 108.0], [35.0, 114.0], [34.0, 109.0], [37.0, 374.0], [36.0, 339.0], [39.0, 133.0], [38.0, 129.0], [41.0, 114.0], [40.0, 130.0], [43.0, 362.0], [42.0, 113.0], [45.0, 117.0], [44.0, 371.0], [47.0, 107.0], [46.0, 132.0], [49.0, 105.0], [48.0, 127.0], [51.0, 104.0], [50.0, 122.0], [53.0, 108.0], [52.0, 223.0], [55.0, 131.0], [54.0, 117.0], [57.0, 122.0], [56.0, 119.0], [59.0, 108.0], [58.0, 110.0], [61.0, 140.0], [60.0, 126.0], [63.0, 131.0], [62.0, 126.0], [67.0, 128.0], [66.0, 132.0], [65.0, 107.0], [64.0, 106.0], [71.0, 125.0], [70.0, 121.66666666666667], [69.0, 114.5], [68.0, 120.0], [75.0, 141.0], [74.0, 127.0], [73.0, 118.0], [72.0, 114.0], [79.0, 137.5], [78.0, 129.0], [77.0, 135.0], [76.0, 125.0], [82.0, 120.0], [81.0, 213.0], [80.0, 191.0], [87.0, 151.0], [86.0, 120.0], [85.0, 196.0], [84.0, 135.5], [91.0, 342.0], [90.0, 273.0], [88.0, 154.0], [95.0, 118.25], [94.0, 117.5], [93.0, 115.0], [92.0, 289.4], [99.0, 119.66666666666669], [98.0, 110.75], [97.0, 119.2], [96.0, 107.5], [100.0, 156.75187969924852], [1.0, 120.0]], "isOverall": false, "label": "echo_get_request", "isController": false}, {"data": [[96.70775969962457, 156.36420525657127]], "isOverall": false, "label": "echo_get_request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 518.15, "minX": 1.67506296E12, "maxY": 13787.183333333332, "series": [{"data": [[1.67506296E12, 2448.2166666666667], [1.67506302E12, 13787.183333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67506296E12, 518.15], [1.67506302E12, 2917.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506302E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 129.06190125276342, "minX": 1.67506296E12, "maxY": 310.09543568464744, "series": [{"data": [[1.67506296E12, 310.09543568464744], [1.67506302E12, 129.06190125276342]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506302E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 126.37140751658065, "minX": 1.67506296E12, "maxY": 309.3734439834026, "series": [{"data": [[1.67506296E12, 309.3734439834026], [1.67506302E12, 126.37140751658065]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506302E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.67506296E12, "maxY": 190.12863070539422, "series": [{"data": [[1.67506296E12, 190.12863070539422], [1.67506302E12, 0.0]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506302E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 103.0, "minX": 1.67506296E12, "maxY": 1858.0, "series": [{"data": [[1.67506296E12, 1858.0], [1.67506302E12, 937.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67506296E12, 542.6], [1.67506302E12, 137.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67506296E12, 1527.2799999999997], [1.67506302E12, 416.10000000000036]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67506296E12, 764.4999999999999], [1.67506302E12, 158.39999999999964]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.67506296E12, 106.0], [1.67506302E12, 103.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67506296E12, 131.0], [1.67506302E12, 119.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506302E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 112.5, "minX": 14.0, "maxY": 554.0, "series": [{"data": [[33.0, 125.0], [32.0, 122.0], [34.0, 140.0], [35.0, 118.0], [14.0, 554.0], [16.0, 112.5], [17.0, 124.0], [18.0, 118.5], [19.0, 115.0], [20.0, 125.0], [22.0, 124.0], [24.0, 117.0], [25.0, 117.0], [26.0, 119.0], [27.0, 124.0], [28.0, 117.5], [29.0, 119.0], [30.0, 121.0], [31.0, 119.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 35.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 112.5, "minX": 14.0, "maxY": 554.0, "series": [{"data": [[33.0, 123.5], [32.0, 121.0], [34.0, 140.0], [35.0, 118.0], [14.0, 554.0], [16.0, 112.5], [17.0, 122.5], [18.0, 117.5], [19.0, 115.0], [20.0, 124.5], [22.0, 123.5], [24.0, 116.5], [25.0, 116.0], [26.0, 118.0], [27.0, 122.5], [28.0, 117.0], [29.0, 118.0], [30.0, 120.0], [31.0, 118.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 35.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.05, "minX": 1.67506296E12, "maxY": 22.583333333333332, "series": [{"data": [[1.67506296E12, 4.05], [1.67506302E12, 22.583333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506302E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.016666666666667, "minX": 1.67506296E12, "maxY": 22.616666666666667, "series": [{"data": [[1.67506296E12, 4.016666666666667], [1.67506302E12, 22.616666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506302E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.016666666666667, "minX": 1.67506296E12, "maxY": 22.616666666666667, "series": [{"data": [[1.67506296E12, 4.016666666666667], [1.67506302E12, 22.616666666666667]], "isOverall": false, "label": "echo_get_request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506302E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.016666666666667, "minX": 1.67506296E12, "maxY": 22.616666666666667, "series": [{"data": [[1.67506296E12, 4.016666666666667], [1.67506302E12, 22.616666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506302E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

