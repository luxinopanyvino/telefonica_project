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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 10227.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 4.0], [5.9, 4.0], [6.0, 6.0], [6.1, 12.0], [6.2, 19.0], [6.3, 26.0], [6.4, 30.0], [6.5, 30.0], [6.6, 31.0], [6.7, 33.0], [6.8, 34.0], [6.9, 36.0], [7.0, 42.0], [7.1, 42.0], [7.2, 54.0], [7.3, 144.0], [7.4, 981.0], [7.5, 1090.0], [7.6, 1206.0], [7.7, 1206.0], [7.8, 1215.0], [7.9, 1344.0], [8.0, 1425.0], [8.1, 1433.0], [8.2, 1433.0], [8.3, 1442.0], [8.4, 1457.0], [8.5, 1465.0], [8.6, 1470.0], [8.7, 1472.0], [8.8, 1472.0], [8.9, 1502.0], [9.0, 1655.0], [9.1, 1937.0], [9.2, 1975.0], [9.3, 2006.0], [9.4, 2006.0], [9.5, 2048.0], [9.6, 2049.0], [9.7, 2055.0], [9.8, 2131.0], [9.9, 2133.0], [10.0, 2133.0], [10.1, 2134.0], [10.2, 2152.0], [10.3, 2152.0], [10.4, 2180.0], [10.5, 2212.0], [10.6, 2212.0], [10.7, 2213.0], [10.8, 2248.0], [10.9, 2252.0], [11.0, 2255.0], [11.1, 2271.0], [11.2, 2271.0], [11.3, 2282.0], [11.4, 2305.0], [11.5, 2310.0], [11.6, 2322.0], [11.7, 2322.0], [11.8, 2336.0], [11.9, 2352.0], [12.0, 2355.0], [12.1, 2371.0], [12.2, 2385.0], [12.3, 2385.0], [12.4, 2390.0], [12.5, 2391.0], [12.6, 2410.0], [12.7, 2424.0], [12.8, 2425.0], [12.9, 2425.0], [13.0, 2435.0], [13.1, 2437.0], [13.2, 2445.0], [13.3, 2463.0], [13.4, 2464.0], [13.5, 2464.0], [13.6, 2471.0], [13.7, 2480.0], [13.8, 2486.0], [13.9, 2490.0], [14.0, 2495.0], [14.1, 2495.0], [14.2, 2497.0], [14.3, 2511.0], [14.4, 2515.0], [14.5, 2529.0], [14.6, 2533.0], [14.7, 2533.0], [14.8, 2537.0], [14.9, 2539.0], [15.0, 2541.0], [15.1, 2556.0], [15.2, 2557.0], [15.3, 2557.0], [15.4, 2558.0], [15.5, 2566.0], [15.6, 2577.0], [15.7, 2581.0], [15.8, 2581.0], [15.9, 2583.0], [16.0, 2586.0], [16.1, 2595.0], [16.2, 2596.0], [16.3, 2597.0], [16.4, 2597.0], [16.5, 2600.0], [16.6, 2606.0], [16.7, 2607.0], [16.8, 2610.0], [16.9, 2619.0], [17.0, 2619.0], [17.1, 2623.0], [17.2, 2625.0], [17.3, 2629.0], [17.4, 2633.0], [17.5, 2648.0], [17.6, 2648.0], [17.7, 2659.0], [17.8, 2662.0], [17.9, 2665.0], [18.0, 2683.0], [18.1, 2700.0], [18.2, 2700.0], [18.3, 2721.0], [18.4, 2731.0], [18.5, 2735.0], [18.6, 2741.0], [18.7, 2750.0], [18.8, 2750.0], [18.9, 2782.0], [19.0, 2783.0], [19.1, 2784.0], [19.2, 2812.0], [19.3, 2812.0], [19.4, 2817.0], [19.5, 2825.0], [19.6, 2830.0], [19.7, 2831.0], [19.8, 2833.0], [19.9, 2833.0], [20.0, 2848.0], [20.1, 2850.0], [20.2, 2850.0], [20.3, 2851.0], [20.4, 2857.0], [20.5, 2857.0], [20.6, 2870.0], [20.7, 2883.0], [20.8, 2896.0], [20.9, 2900.0], [21.0, 2905.0], [21.1, 2905.0], [21.2, 2914.0], [21.3, 2925.0], [21.4, 2935.0], [21.5, 2947.0], [21.6, 2962.0], [21.7, 2962.0], [21.8, 2962.0], [21.9, 2968.0], [22.0, 2971.0], [22.1, 2973.0], [22.2, 2974.0], [22.3, 2974.0], [22.4, 2977.0], [22.5, 2991.0], [22.6, 3021.0], [22.7, 3038.0], [22.8, 3040.0], [22.9, 3040.0], [23.0, 3046.0], [23.1, 3050.0], [23.2, 3068.0], [23.3, 3076.0], [23.4, 3076.0], [23.5, 3082.0], [23.6, 3087.0], [23.7, 3088.0], [23.8, 3094.0], [23.9, 3104.0], [24.0, 3104.0], [24.1, 3132.0], [24.2, 3156.0], [24.3, 3159.0], [24.4, 3159.0], [24.5, 3162.0], [24.6, 3162.0], [24.7, 3167.0], [24.8, 3179.0], [24.9, 3180.0], [25.0, 3195.0], [25.1, 3205.0], [25.2, 3205.0], [25.3, 3219.0], [25.4, 3222.0], [25.5, 3222.0], [25.6, 3225.0], [25.7, 3242.0], [25.8, 3242.0], [25.9, 3262.0], [26.0, 3265.0], [26.1, 3294.0], [26.2, 3304.0], [26.3, 3313.0], [26.4, 3313.0], [26.5, 3313.0], [26.6, 3318.0], [26.7, 3333.0], [26.8, 3336.0], [26.9, 3378.0], [27.0, 3378.0], [27.1, 3422.0], [27.2, 3426.0], [27.3, 3427.0], [27.4, 3465.0], [27.5, 3465.0], [27.6, 3472.0], [27.7, 3482.0], [27.8, 3483.0], [27.9, 3494.0], [28.0, 3496.0], [28.1, 3496.0], [28.2, 3500.0], [28.3, 3507.0], [28.4, 3512.0], [28.5, 3513.0], [28.6, 3515.0], [28.7, 3515.0], [28.8, 3525.0], [28.9, 3527.0], [29.0, 3534.0], [29.1, 3539.0], [29.2, 3543.0], [29.3, 3543.0], [29.4, 3557.0], [29.5, 3557.0], [29.6, 3570.0], [29.7, 3574.0], [29.8, 3587.0], [29.9, 3587.0], [30.0, 3592.0], [30.1, 3601.0], [30.2, 3606.0], [30.3, 3613.0], [30.4, 3615.0], [30.5, 3615.0], [30.6, 3616.0], [30.7, 3618.0], [30.8, 3635.0], [30.9, 3639.0], [31.0, 3639.0], [31.1, 3647.0], [31.2, 3652.0], [31.3, 3680.0], [31.4, 3681.0], [31.5, 3683.0], [31.6, 3683.0], [31.7, 3688.0], [31.8, 3691.0], [31.9, 3691.0], [32.0, 3698.0], [32.1, 3718.0], [32.2, 3718.0], [32.3, 3727.0], [32.4, 3729.0], [32.5, 3745.0], [32.6, 3751.0], [32.7, 3751.0], [32.8, 3751.0], [32.9, 3753.0], [33.0, 3757.0], [33.1, 3760.0], [33.2, 3761.0], [33.3, 3764.0], [33.4, 3764.0], [33.5, 3765.0], [33.6, 3765.0], [33.7, 3766.0], [33.8, 3771.0], [33.9, 3772.0], [34.0, 3772.0], [34.1, 3776.0], [34.2, 3777.0], [34.3, 3779.0], [34.4, 3779.0], [34.5, 3781.0], [34.6, 3781.0], [34.7, 3788.0], [34.8, 3789.0], [34.9, 3791.0], [35.0, 3797.0], [35.1, 3797.0], [35.2, 3817.0], [35.3, 3820.0], [35.4, 3826.0], [35.5, 3826.0], [35.6, 3828.0], [35.7, 3828.0], [35.8, 3830.0], [35.9, 3845.0], [36.0, 3856.0], [36.1, 3856.0], [36.2, 3857.0], [36.3, 3857.0], [36.4, 3857.0], [36.5, 3860.0], [36.6, 3861.0], [36.7, 3865.0], [36.8, 3865.0], [36.9, 3865.0], [37.0, 3867.0], [37.1, 3867.0], [37.2, 3868.0], [37.3, 3868.0], [37.4, 3868.0], [37.5, 3868.0], [37.6, 3869.0], [37.7, 3882.0], [37.8, 3884.0], [37.9, 3889.0], [38.0, 3889.0], [38.1, 3889.0], [38.2, 3893.0], [38.3, 3900.0], [38.4, 3902.0], [38.5, 3917.0], [38.6, 3917.0], [38.7, 3919.0], [38.8, 3926.0], [38.9, 3937.0], [39.0, 3942.0], [39.1, 3947.0], [39.2, 3947.0], [39.3, 3953.0], [39.4, 3953.0], [39.5, 3953.0], [39.6, 3956.0], [39.7, 3959.0], [39.8, 3959.0], [39.9, 3959.0], [40.0, 3964.0], [40.1, 3966.0], [40.2, 3973.0], [40.3, 3975.0], [40.4, 3975.0], [40.5, 3980.0], [40.6, 3985.0], [40.7, 3986.0], [40.8, 3988.0], [40.9, 3989.0], [41.0, 3989.0], [41.1, 3991.0], [41.2, 3996.0], [41.3, 3997.0], [41.4, 3997.0], [41.5, 3997.0], [41.6, 3997.0], [41.7, 3999.0], [41.8, 4001.0], [41.9, 4007.0], [42.0, 4010.0], [42.1, 4012.0], [42.2, 4012.0], [42.3, 4014.0], [42.4, 4016.0], [42.5, 4017.0], [42.6, 4018.0], [42.7, 4018.0], [42.8, 4019.0], [42.9, 4022.0], [43.0, 4022.0], [43.1, 4023.0], [43.2, 4024.0], [43.3, 4024.0], [43.4, 4025.0], [43.5, 4028.0], [43.6, 4029.0], [43.7, 4032.0], [43.8, 4033.0], [43.9, 4033.0], [44.0, 4036.0], [44.1, 4039.0], [44.2, 4040.0], [44.3, 4045.0], [44.4, 4046.0], [44.5, 4046.0], [44.6, 4047.0], [44.7, 4048.0], [44.8, 4056.0], [44.9, 4057.0], [45.0, 4057.0], [45.1, 4057.0], [45.2, 4057.0], [45.3, 4059.0], [45.4, 4060.0], [45.5, 4062.0], [45.6, 4066.0], [45.7, 4066.0], [45.8, 4067.0], [45.9, 4071.0], [46.0, 4075.0], [46.1, 4076.0], [46.2, 4076.0], [46.3, 4082.0], [46.4, 4083.0], [46.5, 4086.0], [46.6, 4090.0], [46.7, 4091.0], [46.8, 4091.0], [46.9, 4091.0], [47.0, 4092.0], [47.1, 4095.0], [47.2, 4098.0], [47.3, 4106.0], [47.4, 4106.0], [47.5, 4109.0], [47.6, 4110.0], [47.7, 4120.0], [47.8, 4121.0], [47.9, 4121.0], [48.0, 4121.0], [48.1, 4122.0], [48.2, 4129.0], [48.3, 4130.0], [48.4, 4132.0], [48.5, 4133.0], [48.6, 4133.0], [48.7, 4133.0], [48.8, 4134.0], [48.9, 4142.0], [49.0, 4146.0], [49.1, 4152.0], [49.2, 4152.0], [49.3, 4153.0], [49.4, 4153.0], [49.5, 4154.0], [49.6, 4156.0], [49.7, 4159.0], [49.8, 4159.0], [49.9, 4165.0], [50.0, 4168.0], [50.1, 4171.0], [50.2, 4174.0], [50.3, 4174.0], [50.4, 4175.0], [50.5, 4177.0], [50.6, 4179.0], [50.7, 4184.0], [50.8, 4185.0], [50.9, 4185.0], [51.0, 4187.0], [51.1, 4189.0], [51.2, 4190.0], [51.3, 4190.0], [51.4, 4192.0], [51.5, 4192.0], [51.6, 4198.0], [51.7, 4201.0], [51.8, 4202.0], [51.9, 4203.0], [52.0, 4205.0], [52.1, 4205.0], [52.2, 4205.0], [52.3, 4207.0], [52.4, 4208.0], [52.5, 4209.0], [52.6, 4211.0], [52.7, 4211.0], [52.8, 4213.0], [52.9, 4213.0], [53.0, 4213.0], [53.1, 4213.0], [53.2, 4214.0], [53.3, 4214.0], [53.4, 4216.0], [53.5, 4222.0], [53.6, 4223.0], [53.7, 4223.0], [53.8, 4225.0], [53.9, 4225.0], [54.0, 4227.0], [54.1, 4231.0], [54.2, 4231.0], [54.3, 4231.0], [54.4, 4231.0], [54.5, 4233.0], [54.6, 4235.0], [54.7, 4243.0], [54.8, 4244.0], [54.9, 4248.0], [55.0, 4248.0], [55.1, 4249.0], [55.2, 4250.0], [55.3, 4251.0], [55.4, 4252.0], [55.5, 4252.0], [55.6, 4252.0], [55.7, 4255.0], [55.8, 4256.0], [55.9, 4258.0], [56.0, 4261.0], [56.1, 4262.0], [56.2, 4262.0], [56.3, 4262.0], [56.4, 4262.0], [56.5, 4263.0], [56.6, 4264.0], [56.7, 4267.0], [56.8, 4267.0], [56.9, 4268.0], [57.0, 4269.0], [57.1, 4269.0], [57.2, 4272.0], [57.3, 4274.0], [57.4, 4274.0], [57.5, 4275.0], [57.6, 4275.0], [57.7, 4282.0], [57.8, 4288.0], [57.9, 4288.0], [58.0, 4289.0], [58.1, 4290.0], [58.2, 4293.0], [58.3, 4294.0], [58.4, 4295.0], [58.5, 4295.0], [58.6, 4296.0], [58.7, 4298.0], [58.8, 4301.0], [58.9, 4302.0], [59.0, 4304.0], [59.1, 4304.0], [59.2, 4308.0], [59.3, 4308.0], [59.4, 4309.0], [59.5, 4309.0], [59.6, 4311.0], [59.7, 4311.0], [59.8, 4312.0], [59.9, 4313.0], [60.0, 4314.0], [60.1, 4315.0], [60.2, 4317.0], [60.3, 4317.0], [60.4, 4317.0], [60.5, 4318.0], [60.6, 4319.0], [60.7, 4322.0], [60.8, 4322.0], [60.9, 4322.0], [61.0, 4325.0], [61.1, 4326.0], [61.2, 4327.0], [61.3, 4330.0], [61.4, 4334.0], [61.5, 4334.0], [61.6, 4335.0], [61.7, 4337.0], [61.8, 4337.0], [61.9, 4343.0], [62.0, 4343.0], [62.1, 4343.0], [62.2, 4345.0], [62.3, 4345.0], [62.4, 4345.0], [62.5, 4346.0], [62.6, 4346.0], [62.7, 4346.0], [62.8, 4347.0], [62.9, 4352.0], [63.0, 4356.0], [63.1, 4357.0], [63.2, 4357.0], [63.3, 4358.0], [63.4, 4359.0], [63.5, 4361.0], [63.6, 4361.0], [63.7, 4362.0], [63.8, 4362.0], [63.9, 4363.0], [64.0, 4365.0], [64.1, 4365.0], [64.2, 4367.0], [64.3, 4369.0], [64.4, 4369.0], [64.5, 4369.0], [64.6, 4369.0], [64.7, 4373.0], [64.8, 4373.0], [64.9, 4374.0], [65.0, 4374.0], [65.1, 4376.0], [65.2, 4379.0], [65.3, 4381.0], [65.4, 4388.0], [65.5, 4388.0], [65.6, 4390.0], [65.7, 4393.0], [65.8, 4393.0], [65.9, 4397.0], [66.0, 4397.0], [66.1, 4397.0], [66.2, 4399.0], [66.3, 4402.0], [66.4, 4412.0], [66.5, 4412.0], [66.6, 4413.0], [66.7, 4413.0], [66.8, 4416.0], [66.9, 4416.0], [67.0, 4419.0], [67.1, 4420.0], [67.2, 4420.0], [67.3, 4420.0], [67.4, 4420.0], [67.5, 4423.0], [67.6, 4424.0], [67.7, 4428.0], [67.8, 4430.0], [67.9, 4430.0], [68.0, 4432.0], [68.1, 4432.0], [68.2, 4439.0], [68.3, 4443.0], [68.4, 4444.0], [68.5, 4444.0], [68.6, 4446.0], [68.7, 4453.0], [68.8, 4454.0], [68.9, 4454.0], [69.0, 4455.0], [69.1, 4455.0], [69.2, 4457.0], [69.3, 4462.0], [69.4, 4466.0], [69.5, 4469.0], [69.6, 4469.0], [69.7, 4469.0], [69.8, 4474.0], [69.9, 4479.0], [70.0, 4482.0], [70.1, 4485.0], [70.2, 4485.0], [70.3, 4487.0], [70.4, 4487.0], [70.5, 4488.0], [70.6, 4490.0], [70.7, 4492.0], [70.8, 4492.0], [70.9, 4493.0], [71.0, 4494.0], [71.1, 4498.0], [71.2, 4508.0], [71.3, 4511.0], [71.4, 4511.0], [71.5, 4513.0], [71.6, 4514.0], [71.7, 4514.0], [71.8, 4515.0], [71.9, 4515.0], [72.0, 4515.0], [72.1, 4519.0], [72.2, 4524.0], [72.3, 4525.0], [72.4, 4526.0], [72.5, 4527.0], [72.6, 4527.0], [72.7, 4534.0], [72.8, 4534.0], [72.9, 4535.0], [73.0, 4536.0], [73.1, 4536.0], [73.2, 4537.0], [73.3, 4540.0], [73.4, 4541.0], [73.5, 4546.0], [73.6, 4547.0], [73.7, 4547.0], [73.8, 4548.0], [73.9, 4552.0], [74.0, 4561.0], [74.1, 4564.0], [74.2, 4567.0], [74.3, 4567.0], [74.4, 4570.0], [74.5, 4571.0], [74.6, 4573.0], [74.7, 4574.0], [74.8, 4584.0], [74.9, 4584.0], [75.0, 4589.0], [75.1, 4589.0], [75.2, 4596.0], [75.3, 4597.0], [75.4, 4600.0], [75.5, 4600.0], [75.6, 4608.0], [75.7, 4609.0], [75.8, 4610.0], [75.9, 4612.0], [76.0, 4616.0], [76.1, 4616.0], [76.2, 4619.0], [76.3, 4620.0], [76.4, 4620.0], [76.5, 4620.0], [76.6, 4624.0], [76.7, 4624.0], [76.8, 4625.0], [76.9, 4630.0], [77.0, 4632.0], [77.1, 4632.0], [77.2, 4632.0], [77.3, 4634.0], [77.4, 4636.0], [77.5, 4637.0], [77.6, 4638.0], [77.7, 4638.0], [77.8, 4638.0], [77.9, 4644.0], [78.0, 4645.0], [78.1, 4647.0], [78.2, 4650.0], [78.3, 4650.0], [78.4, 4650.0], [78.5, 4651.0], [78.6, 4658.0], [78.7, 4659.0], [78.8, 4662.0], [78.9, 4668.0], [79.0, 4668.0], [79.1, 4669.0], [79.2, 4673.0], [79.3, 4680.0], [79.4, 4687.0], [79.5, 4689.0], [79.6, 4689.0], [79.7, 4691.0], [79.8, 4691.0], [79.9, 4696.0], [80.0, 4696.0], [80.1, 4697.0], [80.2, 4697.0], [80.3, 4700.0], [80.4, 4701.0], [80.5, 4703.0], [80.6, 4706.0], [80.7, 4707.0], [80.8, 4707.0], [80.9, 4709.0], [81.0, 4709.0], [81.1, 4717.0], [81.2, 4718.0], [81.3, 4718.0], [81.4, 4719.0], [81.5, 4722.0], [81.6, 4728.0], [81.7, 4729.0], [81.8, 4729.0], [81.9, 4729.0], [82.0, 4733.0], [82.1, 4733.0], [82.2, 4737.0], [82.3, 4741.0], [82.4, 4744.0], [82.5, 4744.0], [82.6, 4747.0], [82.7, 4753.0], [82.8, 4753.0], [82.9, 4753.0], [83.0, 4762.0], [83.1, 4762.0], [83.2, 4763.0], [83.3, 4763.0], [83.4, 4766.0], [83.5, 4772.0], [83.6, 4773.0], [83.7, 4773.0], [83.8, 4775.0], [83.9, 4778.0], [84.0, 4782.0], [84.1, 4782.0], [84.2, 4796.0], [84.3, 4796.0], [84.4, 4798.0], [84.5, 4803.0], [84.6, 4806.0], [84.7, 4807.0], [84.8, 4807.0], [84.9, 4810.0], [85.0, 4810.0], [85.1, 4811.0], [85.2, 4819.0], [85.3, 4825.0], [85.4, 4825.0], [85.5, 4828.0], [85.6, 4834.0], [85.7, 4836.0], [85.8, 4840.0], [85.9, 4851.0], [86.0, 4851.0], [86.1, 4853.0], [86.2, 4854.0], [86.3, 4858.0], [86.4, 4863.0], [86.5, 4863.0], [86.6, 4863.0], [86.7, 4867.0], [86.8, 4868.0], [86.9, 4869.0], [87.0, 4873.0], [87.1, 4875.0], [87.2, 4875.0], [87.3, 4877.0], [87.4, 4884.0], [87.5, 4885.0], [87.6, 4889.0], [87.7, 4895.0], [87.8, 4895.0], [87.9, 4907.0], [88.0, 4914.0], [88.1, 4922.0], [88.2, 4924.0], [88.3, 4924.0], [88.4, 4924.0], [88.5, 4934.0], [88.6, 4952.0], [88.7, 4953.0], [88.8, 4956.0], [88.9, 4956.0], [89.0, 4967.0], [89.1, 4972.0], [89.2, 4977.0], [89.3, 4979.0], [89.4, 4981.0], [89.5, 4981.0], [89.6, 4981.0], [89.7, 4995.0], [89.8, 5003.0], [89.9, 5005.0], [90.0, 5012.0], [90.1, 5012.0], [90.2, 5024.0], [90.3, 5027.0], [90.4, 5049.0], [90.5, 5058.0], [90.6, 5059.0], [90.7, 5059.0], [90.8, 5087.0], [90.9, 5091.0], [91.0, 5106.0], [91.1, 5107.0], [91.2, 5133.0], [91.3, 5133.0], [91.4, 5139.0], [91.5, 5145.0], [91.6, 5148.0], [91.7, 5179.0], [91.8, 5203.0], [91.9, 5203.0], [92.0, 5232.0], [92.1, 5244.0], [92.2, 5258.0], [92.3, 5267.0], [92.4, 5267.0], [92.5, 5285.0], [92.6, 5286.0], [92.7, 5286.0], [92.8, 5318.0], [92.9, 5326.0], [93.0, 5326.0], [93.1, 5353.0], [93.2, 5414.0], [93.3, 5417.0], [93.4, 5418.0], [93.5, 5422.0], [93.6, 5422.0], [93.7, 5430.0], [93.8, 5488.0], [93.9, 5523.0], [94.0, 5524.0], [94.1, 5567.0], [94.2, 5567.0], [94.3, 5590.0], [94.4, 5591.0], [94.5, 5669.0], [94.6, 5688.0], [94.7, 5750.0], [94.8, 5750.0], [94.9, 5750.0], [95.0, 5773.0], [95.1, 5793.0], [95.2, 5800.0], [95.3, 5837.0], [95.4, 5837.0], [95.5, 5853.0], [95.6, 5862.0], [95.7, 5873.0], [95.8, 5880.0], [95.9, 5924.0], [96.0, 5924.0], [96.1, 5965.0], [96.2, 5997.0], [96.3, 6050.0], [96.4, 6085.0], [96.5, 6085.0], [96.6, 6096.0], [96.7, 6100.0], [96.8, 6400.0], [96.9, 6725.0], [97.0, 6731.0], [97.1, 6731.0], [97.2, 6749.0], [97.3, 6860.0], [97.4, 6916.0], [97.5, 7013.0], [97.6, 7057.0], [97.7, 7057.0], [97.8, 7154.0], [97.9, 7516.0], [98.0, 7737.0], [98.1, 7868.0], [98.2, 7944.0], [98.3, 7944.0], [98.4, 8088.0], [98.5, 8391.0], [98.6, 8501.0], [98.7, 8602.0], [98.8, 8650.0], [98.9, 8650.0], [99.0, 8713.0], [99.1, 9062.0], [99.2, 9066.0], [99.3, 9144.0], [99.4, 9296.0], [99.5, 9296.0], [99.6, 9318.0], [99.7, 9378.0], [99.8, 9448.0], [99.9, 10227.0]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 62.0, "series": [{"data": [[0.0, 60.0], [900.0, 1.0], [1000.0, 1.0], [1200.0, 2.0], [1300.0, 1.0], [1400.0, 7.0], [1500.0, 1.0], [1600.0, 1.0], [1900.0, 2.0], [2000.0, 4.0], [2100.0, 6.0], [2200.0, 7.0], [2300.0, 10.0], [2400.0, 14.0], [2500.0, 18.0], [2600.0, 14.0], [2800.0, 14.0], [2700.0, 9.0], [2900.0, 14.0], [3000.0, 11.0], [3100.0, 10.0], [3200.0, 9.0], [3300.0, 7.0], [3400.0, 9.0], [3500.0, 16.0], [3600.0, 17.0], [3700.0, 25.0], [3800.0, 26.0], [3900.0, 29.0], [4000.0, 46.0], [4100.0, 36.0], [4300.0, 62.0], [4200.0, 59.0], [4500.0, 35.0], [4600.0, 40.0], [4400.0, 41.0], [4700.0, 35.0], [4800.0, 28.0], [4900.0, 16.0], [5000.0, 10.0], [5100.0, 7.0], [5200.0, 8.0], [5300.0, 3.0], [5400.0, 6.0], [5500.0, 5.0], [5600.0, 2.0], [5700.0, 4.0], [5800.0, 6.0], [6100.0, 1.0], [6000.0, 3.0], [5900.0, 3.0], [6400.0, 1.0], [6700.0, 3.0], [6900.0, 1.0], [6800.0, 1.0], [7000.0, 2.0], [7100.0, 1.0], [7500.0, 1.0], [7900.0, 1.0], [7800.0, 1.0], [7700.0, 1.0], [8000.0, 1.0], [8500.0, 1.0], [8700.0, 1.0], [8600.0, 2.0], [8300.0, 1.0], [9100.0, 1.0], [9200.0, 1.0], [9000.0, 2.0], [9300.0, 2.0], [9400.0, 1.0], [10200.0, 1.0], [100.0, 1.0]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 753.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 753.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 69.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 84.62883435582822, "minX": 1.6750623E12, "maxY": 100.0, "series": [{"data": [[1.67506236E12, 84.62883435582822], [1.6750623E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506236E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1848.0, "minX": 1.0, "maxY": 4877.0, "series": [{"data": [[2.0, 4487.0], [3.0, 4211.0], [4.0, 4154.0], [5.0, 4423.0], [6.0, 4274.0], [7.0, 4482.0], [9.0, 4658.5], [11.0, 4709.5], [12.0, 4877.0], [13.0, 4701.0], [14.0, 4208.0], [16.0, 4629.5], [17.0, 4782.0], [18.0, 4571.0], [19.0, 4335.0], [20.0, 4511.0], [21.0, 4825.0], [22.0, 4669.0], [23.0, 4494.0], [24.0, 4632.0], [25.0, 4347.0], [26.0, 4298.0], [27.0, 4439.0], [28.0, 4268.0], [29.0, 4430.0], [30.0, 4381.0], [31.0, 4453.0], [33.0, 4319.0], [32.0, 4252.0], [35.0, 3953.0], [34.0, 3861.0], [37.0, 4019.0], [36.0, 3534.0], [39.0, 3681.0], [38.0, 3727.0], [41.0, 3639.0], [40.0, 3989.0], [43.0, 3865.0], [42.0, 3618.0], [45.0, 3574.0], [44.0, 3570.0], [47.0, 3543.0], [46.0, 3615.0], [48.0, 3427.0], [51.0, 3094.0], [50.0, 3541.0], [53.0, 3046.0], [52.0, 3088.0], [54.0, 2896.0], [57.0, 3040.0], [56.0, 3197.5], [59.0, 3132.0], [58.0, 2973.0], [61.0, 3333.0], [60.0, 2977.0], [63.0, 2968.0], [62.0, 3087.0], [67.0, 2947.0], [66.0, 2812.0], [65.0, 2925.0], [64.0, 2586.0], [71.0, 2905.0], [70.0, 4152.0], [69.0, 2883.0], [68.0, 3050.0], [75.0, 2437.0], [74.0, 3242.0], [73.0, 3162.0], [72.0, 3265.0], [79.0, 2974.0], [78.0, 2947.5], [76.0, 2850.0], [83.0, 2425.0], [82.0, 2486.0], [81.0, 2971.0], [80.0, 3304.0], [87.0, 2391.0], [86.0, 2683.0], [85.0, 3021.0], [84.0, 2596.0], [91.0, 2848.0], [90.0, 2463.0], [89.0, 2647.0], [88.0, 2683.0], [95.0, 2589.0], [94.0, 2430.5], [93.0, 2606.0], [92.0, 2566.0], [99.0, 2178.857142857143], [98.0, 2553.0], [97.0, 2880.0], [96.0, 1848.0], [100.0, 3918.1081460674136], [1.0, 4216.0]], "isOverall": false, "label": "echo_get_request", "isController": false}, {"data": [[93.9553679131484, 3840.0723763570504]], "isOverall": false, "label": "echo_get_request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 557.3166666666667, "minX": 1.6750623E12, "maxY": 1030326.3, "series": [{"data": [[1.67506236E12, 605508.95], [1.6750623E12, 1030326.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67506236E12, 557.3166666666667], [1.6750623E12, 950.0166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506236E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3522.825153374234, "minX": 1.6750623E12, "maxY": 4045.6838966202768, "series": [{"data": [[1.67506236E12, 3522.825153374234], [1.6750623E12, 4045.6838966202768]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506236E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3086.426380368098, "minX": 1.6750623E12, "maxY": 3859.461232604375, "series": [{"data": [[1.67506236E12, 3086.426380368098], [1.6750623E12, 3859.461232604375]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506236E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 45.576687116564464, "minX": 1.6750623E12, "maxY": 83.1948310139165, "series": [{"data": [[1.67506236E12, 45.576687116564464], [1.6750623E12, 83.1948310139165]], "isOverall": false, "label": "echo_get_request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506236E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1090.0, "minX": 1.6750623E12, "maxY": 10227.0, "series": [{"data": [[1.67506236E12, 10227.0], [1.6750623E12, 7057.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67506236E12, 5618.800000000003], [1.6750623E12, 4995.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67506236E12, 9390.6], [1.6750623E12, 6726.2]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67506236E12, 8073.599999999997], [1.6750623E12, 5488.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.67506236E12, 2048.0], [1.6750623E12, 1090.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67506236E12, 3900.0], [1.6750623E12, 4293.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506236E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 4.0, "maxY": 5849.5, "series": [{"data": [[9.0, 4272.0], [10.0, 3323.0], [11.0, 4609.0], [12.0, 4313.0], [13.0, 3647.0], [14.0, 4213.0], [15.0, 4190.0], [16.0, 4208.0], [4.0, 3907.0], [19.0, 5849.5], [5.0, 4525.0], [20.0, 4753.0], [21.0, 4863.5], [22.0, 3402.0], [23.0, 2583.0], [31.0, 4924.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 2.0], [10.0, 43.5], [11.0, 1336.0], [12.0, 2.0], [13.0, 19.0], [14.0, 2.5], [15.0, 2.0], [16.0, 2.0], [19.0, 3.0], [20.0, 3.0], [5.0, 2006.0], [21.0, 2.0], [23.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 4.0, "maxY": 5691.0, "series": [{"data": [[9.0, 4128.0], [10.0, 3095.0], [11.0, 4352.0], [12.0, 4150.0], [13.0, 3442.0], [14.0, 3994.0], [15.0, 3972.0], [16.0, 3882.0], [4.0, 3774.0], [19.0, 5691.0], [5.0, 4128.0], [20.0, 4391.0], [21.0, 4155.5], [22.0, 3233.5], [23.0, 2353.0], [31.0, 4152.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 0.0], [10.0, 0.0], [11.0, 0.0], [12.0, 0.0], [13.0, 0.0], [14.0, 0.0], [15.0, 0.0], [16.0, 0.0], [19.0, 0.0], [20.0, 0.0], [5.0, 0.0], [21.0, 0.0], [23.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.516666666666667, "minX": 1.6750623E12, "maxY": 9.3, "series": [{"data": [[1.67506236E12, 4.516666666666667], [1.6750623E12, 9.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506236E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.6750623E12, "maxY": 7.983333333333333, "series": [{"data": [[1.67506236E12, 4.683333333333334], [1.6750623E12, 7.983333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.67506236E12, 0.75], [1.6750623E12, 0.4]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67506236E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.6750623E12, "maxY": 7.983333333333333, "series": [{"data": [[1.67506236E12, 0.75], [1.6750623E12, 0.4]], "isOverall": false, "label": "echo_get_request-failure", "isController": false}, {"data": [[1.67506236E12, 4.683333333333334], [1.6750623E12, 7.983333333333333]], "isOverall": false, "label": "echo_get_request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506236E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.6750623E12, "maxY": 7.983333333333333, "series": [{"data": [[1.67506236E12, 4.683333333333334], [1.6750623E12, 7.983333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.67506236E12, 0.75], [1.6750623E12, 0.4]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67506236E12, "title": "Total Transactions Per Second"}},
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

