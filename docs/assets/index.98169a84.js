(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const Y of r)if(Y.type==="childList")for(const f of Y.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function o(r){const Y={};return r.integrity&&(Y.integrity=r.integrity),r.referrerpolicy&&(Y.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?Y.credentials="include":r.crossorigin==="anonymous"?Y.credentials="omit":Y.credentials="same-origin",Y}function m(r){if(r.ep)return;r.ep=!0;const Y=o(r);fetch(r.href,Y)}})();function V(){}function en(n){return n()}function rn(){return Object.create(null)}function D(n){n.forEach(en)}function dn(n){return typeof n=="function"}function bn(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function hn(n){return Object.keys(n).length===0}function v(n,t){n.appendChild(t)}function An(n,t,o){n.insertBefore(t,o||null)}function K(n){n.parentNode&&n.parentNode.removeChild(n)}function wn(n,t){for(let o=0;o<n.length;o+=1)n[o]&&n[o].d(t)}function B(n){return document.createElement(n)}function R(n){return document.createTextNode(n)}function i(){return R(" ")}function G(n,t,o,m){return n.addEventListener(t,o,m),()=>n.removeEventListener(t,o,m)}function e(n,t,o){o==null?n.removeAttribute(t):n.getAttribute(t)!==o&&n.setAttribute(t,o)}function qn(n){return Array.from(n.childNodes)}function k(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function M(n,t){n.value=t??""}function zn(n,t,o,m){o===null?n.style.removeProperty(t):n.style.setProperty(t,o,m?"important":"")}function mn(n,t,o){n.classList[o?"add":"remove"](t)}let U;function Q(n){U=n}const F=[],Yn=[],W=[],fn=[],Zn=Promise.resolve();let x=!1;function $n(){x||(x=!0,Zn.then(Cn))}function E(n){W.push(n)}const O=new Set;let N=0;function Cn(){const n=U;do{for(;N<F.length;){const t=F[N];N++,Q(t),un(t.$$)}for(Q(null),F.length=0,N=0;Yn.length;)Yn.pop()();for(let t=0;t<W.length;t+=1){const o=W[t];O.has(o)||(O.add(o),o())}W.length=0}while(F.length);for(;fn.length;)fn.pop()();x=!1,O.clear(),Q(n)}function un(n){if(n.fragment!==null){n.update(),D(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(E)}}const _n=new Set;function an(n,t){n&&n.i&&(_n.delete(n),n.i(t))}function Sn(n,t,o,m){const{fragment:r,after_update:Y}=n.$$;r&&r.m(t,o),m||E(()=>{const f=n.$$.on_mount.map(en).filter(dn);n.$$.on_destroy?n.$$.on_destroy.push(...f):D(f),n.$$.on_mount=[]}),Y.forEach(E)}function Xn(n,t){const o=n.$$;o.fragment!==null&&(D(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function Tn(n,t){n.$$.dirty[0]===-1&&(F.push(n),$n(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function Ln(n,t,o,m,r,Y,f,l=[-1]){const s=U;Q(n);const c=n.$$={fragment:null,ctx:[],props:Y,update:V,not_equal:r,bound:rn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:rn(),dirty:l,skip_bound:!1,root:t.target||s.$$.root};f&&f(c.root);let C=!1;if(c.ctx=o?o(n,t.props||{},(g,w,...q)=>{const z=q.length?q[0]:w;return c.ctx&&r(c.ctx[g],c.ctx[g]=z)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](z),C&&Tn(n,g)),w}):[],c.update(),C=!0,D(c.before_update),c.fragment=m?m(c.ctx):!1,t.target){if(t.hydrate){const g=qn(t.target);c.fragment&&c.fragment.l(g),g.forEach(K)}else c.fragment&&c.fragment.c();t.intro&&an(n.$$.fragment),Sn(n,t.target,t.anchor,t.customElement),Cn()}Q(s)}class Mn{$destroy(){Xn(this,1),this.$destroy=V}$on(t,o){if(!dn(o))return V;const m=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return m.push(o),()=>{const r=m.indexOf(o);r!==-1&&m.splice(r,1)}}$set(t){this.$$set&&!hn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Dn(n=""){return pn(n).reduce((t,o)=>Math.max(t,o),0)}function Fn(n=""){for(var t=pn(n).sort((r,Y)=>Y-r),o=0,m=0;m<Math.min(3,t.length);m++)o+=t[m];return o}function pn(n){var t=[0];return n.split(`
`).forEach(o=>{o?t[t.length-1]+=parseInt(o):t.push(0)}),t}const Gn=Object.freeze(Object.defineProperty({__proto__:null,part1:Dn,part2:Fn},Symbol.toStringTag,{value:"Module"}));function Qn(n=""){var t={"A X":4,"B X":1,"C X":7,"A Y":8,"B Y":5,"C Y":2,"A Z":3,"B Z":9,"C Z":6};return n.split(`
`).map(o=>t[o]).reduce((o,m)=>o+m)}function Vn(n=""){var t={"A X":3,"B X":1,"C X":2,"A Y":4,"B Y":5,"C Y":6,"A Z":8,"B Z":9,"C Z":7};return n.split(`
`).map(o=>t[o]).reduce((o,m)=>o+m)}const Pn=Object.freeze(Object.defineProperty({__proto__:null,part1:Qn,part2:Vn},Symbol.toStringTag,{value:"Module"}));function Jn(n=""){var t=0;return n.split(`
`).forEach(o=>{o=o.trim();for(var m={},r=o.length/2,Y=0;Y<r;Y++)m[o.charAt(Y)]=!0;for(var f=r;f<o.length;f++)if(m[o.charAt(f)]){t+=Bn(o,f);return}}),t}function Hn(n=""){var t,o,m=0;return n.split(`
`).forEach((r,Y)=>{r=r.trim();var f=Y%3;if(f===0){t={};for(var l of r)t[l]=!0}else if(f===1){o={};for(var l of r)t[l]&&(o[l]=!0)}else for(var l of r)if(o[l]){m+=Bn(l,0);return}}),m}function Bn(n,t){var o=n.charCodeAt(t);return o>95?o-96:o-38}const Nn=Object.freeze(Object.defineProperty({__proto__:null,part1:Jn,part2:Hn},Symbol.toStringTag,{value:"Module"}));function Wn(n=""){var t=0;return n.split(`
`).forEach(o=>{var[m,r]=o.split(","),[Y,f]=m.split("-").map(c=>parseInt(c)),[l,s]=r.split("-").map(c=>parseInt(c));Y<l&&s>f||l<Y&&f>s||t++}),t}function Rn(n=""){var t=0;return n.split(`
`).forEach(o=>{var[m,r]=o.split(","),[Y,f]=m.split("-").map(c=>parseInt(c)),[l,s]=r.split("-").map(c=>parseInt(c));f<l||Y>s||t++}),t}const yn=Object.freeze(Object.defineProperty({__proto__:null,part1:Wn,part2:Rn},Symbol.toStringTag,{value:"Module"}));function On(n=""){var t=[];return n.split(`
`).forEach(o=>{if(o.includes("["))for(var m=1;m<o.length;m+=4){var r=(m-1)/4;t[r]||(t[r]=[]);var Y=o.charAt(m);Y!==" "&&t[r].unshift(Y)}if(o.includes("move")){var f=/move (\d+) from (\d+) to (\d+)/.exec(o);if(!f)return;for(var l=parseInt(f[1]),s=parseInt(f[2])-1,c=parseInt(f[3])-1,m=0;m<l;m++){var C=t[s].pop();t[c].push(C)}}}),t.map(o=>o[o.length-1]).join("")}function kn(n=""){var t=[];return n.split(`
`).forEach(o=>{if(o.includes("["))for(var m=1;m<o.length;m+=4){var r=(m-1)/4;t[r]||(t[r]=[]);var Y=o.charAt(m);Y!==" "&&t[r].unshift(Y)}if(o.includes("move")){var f=/move (\d+) from (\d+) to (\d+)/.exec(o);if(!f)return;var l=parseInt(f[1]),s=parseInt(f[2])-1,c=parseInt(f[3])-1,C=t[s],g=C.splice(C.length-l);t[c]=t[c].concat(g)}}),t.map(o=>o[o.length-1]).join("")}const xn=Object.freeze(Object.defineProperty({__proto__:null,part1:On,part2:kn},Symbol.toStringTag,{value:"Module"}));function En(n=""){return gn(n,4)}function In(n=""){return gn(n,14)}function gn(n,t){for(var o=0,m=0;m<n.length;m++){if(o++,o===t)return m+1;for(var r=1;r<t-o+1;r++)if(n[m]===n[m+r]){o=0;break}}return-1}const Kn=Object.freeze(Object.defineProperty({__proto__:null,part1:En,part2:In},Symbol.toStringTag,{value:"Module"}));function Un(n=""){var t=jn(n),o=nn(t),m=0;return o.forEach(r=>{r.size<1e5&&(m+=r.size)}),m}function n1(n=""){var t=jn(n),o=nn(t),m=7e7-t.size,r=3e7-m,Y=1/0;return o.forEach(f=>{f.size>r&&f.size<Y&&(Y=f.size)}),Y}function I(n){this.parent=n,this.children={},this.size=0}function t1(n="a",t="1"){this.name=n,this.size=parseInt(t)}function jn(n){var t=new I(null),o=t;return n.split(`
`).forEach(m=>{if(m=m.trim(),/^\$ cd /.test(m)){var r=m.substring(5);r==="/"?o=t:r===".."?o=o.parent:o=o.children[r]}else if(!/^\$ ls/.test(m))if(/^dir /.test(m)){var Y=m.substring(4);o.children[Y]=o.children[Y]||new I(o)}else if(/^\d+ \S+$/.test(m)){var[f,l]=m.split(" ");o.children[l]=o.children[l]||new t1(l,f)}else console.log("err",m);if(!o)return console.log("err",o,t),""}),t}function nn(n,t=[]){t.push(n);var o=0;for(var m in n.children){var r=n.children[m];r instanceof I&&nn(r,t),o+=r.size}return n.size=o,t}const o1=Object.freeze(Object.defineProperty({__proto__:null,part1:Un,part2:n1},Symbol.toStringTag,{value:"Module"})),r1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),m1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Y1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),f1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),l1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),c1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),v1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),s1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),e1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),d1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),A1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),C1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),p1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),B1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),g1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),j1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),b1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),h1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),w1=`5557
6663
3952
4750
2271
6653
4406
4256
6871
6720
6248
4518
4987

3931
8484
8418
7221
6057
7458
7336
8299
5058

7862
4603
4837
5209
1427
3766
4454
3664
9580

6306
4457
5653
4466
5949
7420
2789
3053
2060
4009
1580
5870

2128
5160
6167
2810
7342
7388
3945
2653
4605
8023
3736

40312

8527
4368
1291
1159
2869
10302
8489

3268
4846
4747
8406
4839
4459
6374
3271
3072
1600

2279
2628
4570
1688
2989
6512
5511
5544
1312
6497

32986
21583

5607
1597
7704
6719
7585
6676
1192
5987
7336
2079
7280

4148

6518
7660
2690
6461
7436
4628
5750
5493
4000
7290

3774
5553
2325
6203
10506
7826
11499

6237
6275
7370
6287
6289
3980
2487
2940
3886
5351
5284
5486

2847
4282
1406
2164
4119
2192
2714
3284
3712
4202
1970
4411
4923
1388
5883

18803

1928
6016
6197
1979
4905
7112
1161
6888
1069
5311
6516

1584
5300
12695
10561
7101

6773
3213
1419
7280
6258
3784
7195
4572
1776
3631
5141
5722

35830
12586

24120
7285
21865

8286
2284
9964
6966
8529
1732
7069
7603

2980
1294
1763
1127
3544
1944
2551
4883
2383
4987
5327
2181
5165

1271
3831
6168
1025
4525
1932
5048
1729
5620
3160

4380
7712
1062
6575
6162
4085
4349
3289
7887
5063
5381

2461
15992
18018
11701

5122
4067
5335
1348
5188
2544
5413
5187
2936
5375
5271
5428
5804
3715
5431

9156
4489
1512
7481
4781
2086
8862
10687

7919
6487
1580
2369
1676
1572
2426
4760
2315
2904
6901

7781

4581
4869
2229
6614
10209
10156
8618
9215

4418
5394
4140
11367
6771
10724
1838

4086
3703
13922

6051
3842
4012
4978
2260
2208
2565
2662
2407
3249
1424
6033
2676
5779
1890

6888
5074
2200
1935
5163
4753
1612
5907
2653
5737
2015
1598
1210

6424
3083
3843
3611
5730
6310
1126
5686
2632
6358
3755
3578
6413
4916

3305
1155
11374
7940
9522
8508
7054

16430

7611
1656
5390
2790
5899
3484
7949
3770
1129
6751
7018

1136
6501
1650
5910
6188
6706
4212
4210
6942
2182
4581
1616
1827

6805
4212
5129
6550
6026
5586
1368
5150
5532
2703
7420

4022
1740
4549
5441
4252
6012
4271
6433
3891
4834
1511
2557
2755

5021
4120
5400
1420
1374
1629
6026
5247
7136
4684
2429
4177

1175

7380
37112

6602
6327
5195
1177
1390
5927
3491
6915
1075
6057
1787
6485

2270
3902
3708
9428
8982
6407
7183
5277
4268

3545
10390
13855
12280
5499
11256

4933
4652
2658
3954
6757
4162
3830
4592
4799
4038
5185
2842
1254

7643
7897
10471
1573
6236
3197

9201
12063
10635
6938
8051
9420
2378

19093
23159
1779

2571
1929
2304
1288
3915
1683
1267
2892
6105
5699
2965
5931

6538
4946
6944
2793
5478
5918
4851
2753
5589
3210
3782

2975
8187
4221
5897
4451
4712

1651
3396
4928
1315
5059
2733
5976
5712
5231
5265
3382
6022
3994
4624
1717

5932
4950
6105
4468
2588
5392
5155
3211
4291
2685
1314
1338
6323
1632

56490

35520
3508

4873
1896
3256
6461
2819
4000
6126
2677
1253
3991
1797
1298
2357
4919

6855
1235
2862
4477
1979
1022
3391
2991
5345
4000
5014
3030
5471

11627

10096
2454
12493
4138
4539
12769

7464
9654
6701
8883
5239
8018
1929
6280
3452

4202
4306
1980
4353
1857
1942
5272
3635
3983
4139
6300
5743
2913
3140

17538
9430

4111
8312
5325
1439
5521
8910
2754
1723
3145

5619
2024
6780
3535
5354
4258
1842
6802
4033
4872
4795
5794
1247

3708
6991
24763

1336
1869
3843
5305
5896
2380
4354
8098
7027
1600

9008
4226
5845
4783
2981
13637

18048
34155

2158
2728
4373
2168
5492
4587
6183
5712
1427
3765

17712
28932

8718
3165
8511
6567
2194
4605
4879
8336
7471

1083
4551
3912
7798
5739
4384
5966
4583
7690
3910

1253
3778
3733
5180
3134
3646
2973
5935
5516
2668
4114
4594
5960
3004
3723

19271
6681
9460
3291

69894

8124
9292

1190
6057
8065
2473
1639
2271
1294
7019
3245
7390

2785
4056
5548
1566
2432
5546
3348
4566
3980
6329
2568
5677
5419
4314

5412
11296
2990
12309
12835
8833

5678
6882
9550
1151
5200
6760
5030
7319
7920

2073
6640
13815
4913
12031
3949

18529
23066
24003

4724
2793
7348
1023
5582
5407
7809
2942
5853
5214
1062

4813
4608
6199
6798
1855
5642
5916
1420
1583
2314
4623
5471

4257
4250
5751
6838
6563
2673
1530
4960
3920
7405
1075
4059

3381
4158
4751
2209
6659
4780
1008
2774
6275
2996
4533
5304

3392
1384
5534
2962
2771
3970
4395
2863
6683
1273
6858
2139
6957

5467
4223
6720
6441
2238
1533
5809
4655
2969
4292
6337
3154
3836

2802
1318
4028
4453
5955
6470
5629
3499
1961
5072
2276
3481
4052
6396

7524
1036
8480
3074
5500
6945
5897
6492
7556
5640

7230
14327
7415
6350
4860

1466
7043
3529
12211
12412
11492

3369
4999
1374
6342
2802
2941
3900
5964
3642
2175
5622
5425
5800

2979
3672
5333
4098
3021
1424
1679
5424
1745
4265
1841
2716
5306

11005
5937
12008
4420
5637
10592

9308
3108
13264
8125
13257
11024

9574
7475
5550
12130
4270
3221
5813

4020
4074
2895
2349
2640
2079
1038
8085
7173
5863
5685

2858
4323
2796
5877
7113
2333
7167
8064
4286
1268
1710

5905
4123
5583
6104
2763
5274
4808
1760
6606
6691
5051
1526
4290

5639
5851
5677
1499
3865
3502
1869
5608
2214
3805
3046
5680
2425
4423
2620

10292
24730
25190

7576
8485
6945
10024
3448
2799
8338
7638

1128
6102
2641
4500
4154
1560
2226
4152
6451
1335
2606
2257
4248
1927

1798
9671
5368
8742
1124
5578

1970
3725
2771
3582
2632
6142
2579
2146
2388
2269
4118
6112
1737

4635
2925
4434
6757
10349
12954

13448
6825
10103
1056
5495
11490

7494
8483
8060
2450
5281
6389
4832
4009
8451

34284

1603
5707
4767
5658
4811
4826
5170
5817
3597
5636
2812
4373
2901
1307

1486
13828
9856
11238
8720
2019

6235
3218
2243
3504
1922
2448
5649
5571
5321
5896
5801
3298

16648
2946
7150
15822

4082
6361
7159
7250
3244
4956
2497
3582
5322
6447
5371
2097

3697
6605
5261
1991
6182
5617
2118
7340
5825
2862
1702

4314
4229
2169
6275
3786
1121
6957
1337
1332
4989
1844
2178
5812

15539
2282
15518
9604
5838

27639

3214
4879
3533
2352
7107
5906
8017
5251
5414
5382
3647

2692
33924

3209
2672
5418
1903
3886
4947
1776
1235
1591
1239
5098
3302
6063
2818

13709

7734
7653
4415

1666
8435
4478
1519
6902
1635
7825

6651
1576
4934
3478
3321
2203
6682
4807
7456
3215
1489
2297

7800
3507
2392
7693
6398
8654
1700
6329
6906
4895

6724
13961
9520
9359
13472

6652
14619
8763
9602
16258

1241
4308
2894
4673
1527
6369
5143
3759
1870
5124
3588
6547
2498

1791
7613
3504
2538
3030
5815
2233
5444
2441
1007
3379

3552
4921
4066
3719
5667
4850
1634
3690
1119
4882
2004
5276
3094
4641
2747

12424
6884
14048
14023
1167

14032
10399
15054

36358
1107

1571
2482
4176
4617
1345
2409
4293
2630
5182
5619
2478
1867
5272
4378
3740

7622
8215
3888
6528
4642
5321
4188
3362
4888
7881

10689
9236
8990
5172
3808
12090
4886

13681
18086
7314
2323

7660
4072
5256
7493
9843
4037

25993
4860
1582

6486
2017
3122
1325
4295
4719
2723
5058
3755
3442
5051
5075
4872

4914
10902
15299
8897

1127
4276
1756
5614
1418
5097
1592
1895
7080

2115
2568
1336
3705
3724
1700
1609
1828
2414
4237
2338
6012
3032
2218
2208

8849
8568
6400
8410
4368
8764
1427
4127
4178

30490
4142

2030
5111
5745
8679
1943
8202
1285
7558
4016
1522

5831
3090
4335
1437
4821
2113
5094
5944
4673
2596
3864
5259
1871
1608

2199
1764
5142
6643
7190
4835
6581
1405
1658
3792
2250
6073

3870
2483
3951
4182
5446
2685
1091
3962
1047
1610
1527
3222
1911
5104

5426
4663
6726
3699
3174
3624
5484
5948
1354
1236
5775
7090

3546
3444
1385
4869
2456
4604
4077
3552
7176
6813
6997
2902

1677
13997

5167
5967
8185
2651
3727
4484
6003
5162
4850

5218
6379
4277
1597
7423
1074
8715
8456
7021
2336

8958
8689
4334
1060
9038
3588
9339
8979
3346

2575
6747
7542
2648
5594
3696
8934
1751

6196
6698
6136
2850
8180
4098
2881

5732
25560
17361

2901
1622
6652
5704
1146
7084
7118
3471
1666

2406
6393
2230
3030
4327
7405
2547
5892
7341
1722
1612
3218

6903
8864
7636
5110
8870
1217
2648
3657
5840

5989
16071
2219
11769
8755

1648
2098
2757
8375
8655
4497
7677
8314
3619

5323
5392
6638
7142
3855
7531
8756
5909
2428

5567
9816
10210
9465
9301
6144
10073
9933

16283
11551
16041
2127
3410

6921
6847
6005
2213
6929
3604
3729
2111
2870
5211
2879
3116
4096

4863
2555
6330
5701
4633
5732
5706
3555
4386
6518
4218
6123

13295
12444
4812
3646
3392
4269

4394
3424
4545
3162
5525
5268
4625
6719
3657
5607
3709
6378
1544

54079

11984

6538
6184
5782
3642
7797
6854
4210
3231
5819
3244
8018

1558
17824
9560
16295

1208
5757
5575
4905
4640
4377
1847
3419
4671
3182
6184
2672

8700
7999
6570
3211
4908
1469
5401
4840
2924
2854

2166
17731

1535
2635
3175
2678
1217
4326
3518
1611
6389
7438
2615
3146

5043
5895
1419
1226
2417
2537
1698
5144
5937
2387
4113
3673
1124
5076
3166

3098
4831
5860
2784
3187
5113
2336
2667
5178
3327
6020
5811
5782

7997
5018
2443
7044
7292
3564
10170
8878

5202
4184
2615
1187
3642
3379
3477
5152
1712
2903
2769
3805
1979
4902
1198

5861
1860
8082
2990
5096
6764
3090
5473
2580
1452

4315
6801
1335
2474
3566
3067
5804
4057
5492
2849
6533
4677
2386

18899
5787

8958
1159
11750
2269
5522
4240

3265
2730
5316
6167
4144
1824
2753
2016
1286
1999
6176
4520
1521
2450

7213
13737
13559
1264
10959
4193

13793
2804
2170
3728
6751
3108

3104

10079
8735

6035
8147
6401
6153
4028
9294
6355
8167
3844

6599
6319
4326
8388
1409
2321
7996
3887
6073
2778

2849
5674
1635
2067
8804
7444
4775
1568
6278

6823
7466
1008
6783
6258
6584
8655
8072
3086

6043
12126
11498
1832
10190
1530
2192

1614
2820
9718
4461
10396
3606
2481

6036
7966
6674
3059
7310
1138
1974
5574
2907
7896

9037
3659
4092
6191
1896
1986
5991
2290
5726

4208
5969
3220
3588
8793
2797
7843
5187

8513
10633
2236
6997
5444
1620
1021
10020

7180
4727
8226
7912
5481
7611
8852
8035
3168

37280

1710
5518
3890
2648
3111
5237
3741
5613
7738
3520
4885

17182
11752
23068

6680
4747
4916
6825
1181
6707
1076
2361
3399
4805
1663
3463
4772

35202
20846

10406
11741
16051
1157
7483

2827
3431
3324
1781
5418
3182
4725
1022
5403
6308
5990
3219
1495

6314
3800
4825
5057
4397
4182
8213
8160
7795
1063

13147

42635

7219
2962
4108
2347
4155
8715
1685
6921
2164

15675
3583
12653
14222
3991

2363
7410
2143
1091
6713
1412
1099
2242
7544
4937

15772
10228
1020
10845

3682
4323
11915
10229
11727
5173

3365
4295
5082
13629
4173
5848

4324
1921
6222
3428
6022
2250
1170
5026
5168
1261
6274
6142
1250

2571
8209
2334
4244
4228
10666
9860

5584
4728
3012
5794
2321
5837
1252
5151
4842
3557
1980
2061
2743

3604
1299
4017
6001
6568
3675
8039
7628
5977
6430
6212

16156
22045
25960

11109
26000
8491

6540
6302
6140
1644
4311
1184
2320
2920
1251
2939
5130
2011
2711

1667
3628
9498
1778
8394
9324
5849
10744

3036
2127
5374
5864
2650
4093
2326
2657
4305
3766
4749
2265
5303
5515
1109

1443
4494
14241
15696
6478

5404
1527
9780
9950
5559
8421
1375

16733
10347
14682

2913
3592
3393
7007
2276
2047
1320
7350
7874
7183
3394

25380
25324
16859

7300
3697
4423
4902
3917
4646
2016
4472
6660

6756
5563
2641
6879
5437
1179
4055
2195
2732
1254
3605
4191
1482`,q1=`A Y
B Y
B Z
B Z
A Y
C Y
A Y
C Y
A Y
B X
B Y
B Z
A Y
A Y
C Y
C Y
A Y
C Y
B Y
A Y
A Y
C Y
C X
A Y
B Z
C Y
A Y
C Y
A Y
C Y
A Z
A Y
C Y
B Y
A Y
C Y
B X
B Z
C X
B Z
B X
C Y
B Z
A Y
C Y
B X
A Y
A Z
B Y
C Y
A X
C X
C Y
C Y
A Y
C X
A Y
C X
C Y
C Y
A Y
C Y
A Z
A Y
B Z
A Y
A Y
B X
A Y
B Y
A Y
B X
B Y
C Y
A Y
B X
A Y
C X
B Y
A Y
B Z
C Y
C Y
B Y
B Z
B Z
B Y
B Y
A Y
A Y
A Z
C Y
B X
A Y
B Y
A Y
B X
C Y
A Z
C Y
C Y
A Y
A Y
C Y
C Y
B X
A Y
A Y
B X
A Y
C Y
B Z
A Y
B Z
C Y
C X
C Y
B Z
C Y
A Y
A Y
B Y
C X
A X
B X
A Y
C Y
C Y
A Y
A Y
C Y
C Y
A Z
B X
C Y
B X
A Y
C Y
A Y
A Z
C Y
A Y
A Y
A Y
C Y
B X
C Y
A Y
A X
C Y
A Y
B X
C Y
A Y
A Y
B Y
A Y
A Y
C Y
B Y
B X
A Y
A Y
B X
A Y
C Y
A X
C Y
C Y
A Y
B Z
A Y
A Y
C Y
A Y
A Y
C Y
A Z
B Z
A Y
C Y
B X
B X
A Y
A Y
C Y
A Y
A Y
C Y
B Z
B Z
B Y
B Y
A Y
A Y
A Y
A Y
A Y
C X
A Y
A Y
A Y
B Z
C Y
A Y
B Z
A Y
A Y
A Y
B Z
A Z
C X
B X
B Z
B Y
B Y
C Y
C Y
B Y
A Y
C Y
A Y
A Y
C Y
B X
A Y
A X
A Y
A Y
B Z
C Z
A Y
B X
C Y
C Y
A Y
A Z
A Y
C Y
C Y
C Y
A Y
A Y
C Y
C Y
A Y
A Y
A X
A Y
C Y
B X
B Z
C Y
A Y
A X
A Y
C X
C Y
B Z
B Y
A Y
C X
C Y
C Y
C X
C Y
B X
A Y
A Y
A Y
A Z
C Y
A Y
C Y
A Y
B Y
C X
A Y
A Y
A Y
C Y
B Z
A Y
C X
B Y
A Y
B Z
A Y
C Y
C Y
A Y
B Z
C Y
A Z
C Y
A Y
B X
A Y
A Z
A Z
A Z
C Y
C Y
A Z
B Y
A Z
A Y
C X
C Y
A Y
A Y
B Y
A Y
A Y
A Y
B Y
C Y
A Y
C Y
A Y
C X
A Y
A Z
A Y
A Y
A Y
C Y
A Y
C Y
A Y
A Y
C X
A Y
C Y
B Z
C Y
A Y
B Y
A Z
C Y
B Y
A Y
A Y
A Y
A Y
A Y
B Z
B Z
B Z
A X
A Y
B Z
A Y
A Y
C Y
C Y
B Z
A Y
B X
C Y
A Y
A Y
B Y
C Y
B Z
A Y
A Y
A Y
B X
B Y
C Y
A Y
A Y
B X
A Y
B Z
C X
C X
A Y
C Z
C Y
C Y
A Z
B Z
C Y
A Y
A Y
C Y
C Y
C Y
A Y
A X
B Z
A Y
A Y
B Y
B Y
C Y
B Y
B Y
B Z
C Y
C Y
B Y
A Y
C Y
A Y
A Y
B Y
A Y
A X
A Y
B Y
A Y
B Y
C Y
A Y
B Z
A Y
B Y
A Y
A Y
C X
C Y
C X
A Z
C Z
B Y
B Y
C Y
B Y
A Y
A Y
B Y
C Y
C Y
C Y
A Y
B Z
B X
C Y
C Y
A Z
A Z
A Y
A Y
A Y
B Y
A Y
B Y
A Y
B Z
A Z
B Y
C Y
C Y
C Z
B Z
B Y
B X
A Y
B X
B X
B Y
C Y
B Z
A Y
C Y
A Y
C Z
B Y
A Y
A Y
C Y
B Y
C Y
B Y
B Y
A Y
A Y
A Z
C X
A Y
A Y
C Y
A Y
B Z
A Y
A Y
A Y
C Z
C Y
B Z
C Y
B Z
A Y
B Z
B Y
A Y
B Y
A Y
A Y
A Y
A Y
C Y
C Y
C Z
B Y
C Y
C Y
A Y
A Z
A Y
B Z
A Y
C Y
C Y
A Y
A Y
A Y
B Z
A Z
A Y
A Y
A Y
A Y
A Y
B Z
B Z
A Y
A Y
B Z
A Z
A Z
A Y
B Y
B Y
B Z
A Y
B Z
C Y
B Z
B Y
A Y
A Y
C Y
C Y
C Y
A Y
A Y
C Y
C X
C Y
A Y
B Z
A Y
B X
B Y
B Y
B X
A Y
A Z
C Y
B Z
C Y
A Z
A Y
A Y
A Y
C Y
C X
A Y
C Y
A Y
B Z
C Y
A Y
B Z
A Y
C Y
A Y
C Y
B Y
C Y
B X
A Y
A Z
C Y
A Y
C X
C Y
A Y
C Y
A Y
C Y
A Z
B Y
A Y
B Z
C Y
C Z
A Y
A Y
A Z
A Y
A Y
C Y
B Y
C Z
A Y
B Y
C X
B Z
C Y
C Y
B Z
B Z
A Y
B Y
C Y
B Y
C Y
B Y
A Z
C Y
B Z
A Y
A Y
C Y
A Y
B Z
A Y
A Y
C Y
C Y
A Z
A Y
A X
C Y
B Y
B Y
B Z
B Y
B Y
C Y
A Y
C Y
A Y
A Y
B X
C Y
B X
A Y
A Y
B Y
B Z
C Y
A Y
C Y
A Y
A Y
C Y
B Y
C Y
B Y
B X
C Y
A Y
A Y
B Z
B Y
B Y
A Y
A Y
A Y
A Y
A Y
C Y
A Y
A Y
C Y
A Y
B Y
C Y
A Y
A Y
A Y
C Y
A Y
B Y
B Y
A Z
A Y
C Y
B Y
C Y
A Z
B Z
A X
B Y
B Z
A Y
A Y
C Y
B Y
A Y
B Z
A Z
C Y
C Y
A Y
B X
C Y
A Y
C Y
C Y
B Z
A Y
A Y
A Y
C Y
A Y
C Y
B Y
B Y
B Y
A Z
C X
B X
C Y
A Y
A Y
A Y
A Y
C Y
A Y
B Y
A Y
C Z
C Y
A Z
B Y
A Y
C Z
C X
B Y
C X
A Y
B Z
A X
B Y
B Y
B X
C X
A Z
C Y
B Y
C Y
A Z
C Y
C Y
C Y
A Y
A Y
A Y
C Y
A Y
A Y
C X
B Z
C Y
C Y
B Z
C Y
B Y
B Z
A Y
B X
A Y
C Y
A Y
A Y
A Y
A Y
B Z
C Y
C Y
B Z
B Y
C Y
C Z
C Y
C Y
B Y
A Y
A Y
A Y
A Z
C Y
A Y
A Y
C Y
A Y
A Y
B Y
A Y
A X
A Y
A Z
B Y
C Y
A Y
A Y
C Y
A Y
B Z
B Z
C Y
C Y
A Y
A Y
B Z
B Z
A Y
B Y
C Y
A Y
B Y
C Y
A Y
C Y
B X
A Y
A Y
A Y
A Y
A Y
B X
C Y
C Y
B Y
A Y
C Y
B Y
C Z
C Y
B X
C Y
A Y
C Y
C Y
C Y
C Y
B X
A Y
C Y
A X
A Y
C X
A X
C X
C Y
A X
C Y
C Z
C Y
A Y
A Y
A Z
C Y
C Y
B Z
A Y
C Y
A Y
A Y
B Z
C Z
A Y
A Y
C Y
A Y
A Y
B Y
A X
A Y
B Z
A X
C Y
B X
A Y
A Z
C Y
B Z
B Y
B Y
A X
A Z
B Z
C X
C Y
B X
B Z
C Y
C Y
C Y
A Y
C Y
B X
C Y
A Y
A Y
A X
C Z
B Z
C Z
C Y
B Y
C Y
A Y
A Y
C Y
C Y
B Y
C Y
C Y
C Y
A Y
B X
A Y
B Y
C Y
B X
C Y
C Y
B Y
A Y
B Y
B Y
C Y
A Y
B X
C X
C Y
B X
A Y
A Y
B Z
B Y
A Y
B Y
B Y
A Z
B X
B Z
C Y
B Y
C Y
A Y
A Y
B X
A Y
C X
B Y
B Z
B X
C X
C Y
C X
A Y
C Y
B Y
B Y
A Y
B X
C Y
C Y
B X
B X
C Y
B Z
B Y
A Y
C Y
B X
C Y
A Y
A Z
A Y
A Y
C Y
A Z
A Y
B Z
A Y
B Y
B X
B Z
B Y
C Y
A Y
A Y
C X
B Y
A Y
B Y
A Y
C Y
C Y
A Y
B Y
B Y
B Y
C Y
A Y
B Y
B X
B X
A Y
C Y
C Y
A Y
A Y
A Y
A Z
C Y
A Y
C Y
A Y
B Z
C Y
C X
C Y
A Y
C X
B Z
C X
A Y
B X
A Y
C Z
C X
A X
A Y
C Y
B X
A X
B Y
A Y
A Y
A Y
C X
A Z
B Z
C Y
A Y
C Y
C Y
C X
C Y
B Y
C Y
B Z
B Z
C Y
B Y
A Y
A Y
A Y
B Y
C Y
A Y
A Y
C Y
B Y
B Y
C Y
A X
A Y
A Y
A Z
A Y
B Y
C Y
A Y
A Y
A Y
C Y
A Y
B X
A Y
C Y
A Y
A Y
B Z
B Y
B Z
C Y
A Y
A Z
A Y
A Y
B Y
A Y
C Y
C Y
A Y
B Y
C X
B Z
A Y
C Y
B X
B Y
C Y
B Y
C Z
A Z
A Y
C Y
A Y
C Y
C X
A Y
C Y
B X
C Y
A Y
A Y
C Y
A Z
B X
B Z
A Y
B Z
B Y
A Z
B Y
A Y
C Y
A Y
C Y
C Y
A Y
B Y
C Y
A Y
A Y
B X
A Y
A Y
A Y
C Y
A Z
B Y
B X
A Y
B Y
C Y
A Y
C Y
A Z
B X
A Y
A Y
A Y
A Z
A Y
B Y
B Z
B Z
A Y
A Z
A Y
B X
A Y
A Y
A Y
C Y
A Y
A Y
A Z
C Y
A Y
A Y
B X
B Y
C Y
B X
C Y
A Y
B Y
A Y
C Y
C Y
C Y
C Y
A Y
C Y
C Y
B Y
A Y
C Y
A Y
A Y
B Y
A Y
B Y
C X
A Y
A Y
A Y
C Y
B Z
C Y
A X
A Y
A Z
A Y
B X
C X
A Y
B Y
A Y
A Y
B Y
A Y
C Y
A Y
A Y
B Z
C Y
A Y
A X
B Z
A Y
A Y
A Z
C Y
A Z
C Y
B Y
A Y
C X
B X
A Y
C X
C X
A Y
A Y
A X
A Y
A Y
A Y
B Y
C X
A Y
C Y
C Y
A Y
B Z
A Y
C Y
B Z
A Y
C Y
C Y
B X
B Y
B Z
A Y
C Z
C Y
A Y
C X
A Y
C X
B Z
A Y
B Y
A Y
C Y
B Y
A Y
B Y
B X
A Y
B Y
C Y
A Y
C Y
C Y
A X
C Y
C X
A X
A Y
C Y
C Y
C X
C X
C Y
C Y
C Y
A Z
A Y
B Z
C Y
C Y
A Z
A Y
A Y
C X
A Y
A Y
A Y
C Y
A Y
C Y
A Y
A Y
A Y
C Y
C Y
A Y
B Y
B Y
A Z
B X
B X
B Y
C Y
A Y
A X
A Y
B X
C Y
B X
C X
C Y
A Y
A Y
C Y
A Y
C Y
A Y
B Z
C Y
A Y
B Y
A Y
A Y
A Y
A Y
A Z
C Y
A Y
B Y
C Y
C Y
A Y
C X
A Y
A Y
C Y
C Y
C X
B Y
A Y
A Y
A Y
A Y
C Y
A Y
B X
A Z
A Y
C Y
B X
A Y
C Y
A Y
A Y
A Y
C Y
B Y
A Y
A Y
B Z
C Y
C X
A Y
A Y
C Y
A Y
C X
C Y
C Y
A Y
C Y
C Y
C Y
C X
A Y
A Y
A Y
A Y
C Y
B Y
C Y
A Y
A Z
B Z
A Y
B Y
B Z
C Y
A X
B Y
C Y
A Y
A Y
C Y
A Y
A Y
A Z
B Z
C X
B Y
B Y
C Y
C Y
C Y
A Y
A Y
A Y
A Y
C Z
B Y
B Z
C Y
C Y
A Y
B Y
C Y
A Y
A X
B X
C Y
A Y
C Y
C X
C Y
A Y
A Y
B Y
B X
A Y
C Y
A Z
B X
C Y
B X
A Y
B Z
A Y
A Y
B Y
B Z
B X
A Y
B X
B Z
A Y
C Y
A Y
A Y
A Z
B X
A Y
A Y
B Y
A Y
B Z
B X
C Y
C X
C X
C X
A X
A Y
A Y
A Y
B Y
A Y
A Y
A Y
C Y
B Y
B X
B Y
C Y
A Z
A Y
B Z
A Y
C Y
A Y
A Z
B Z
C Y
B Z
A Y
C Y
B Y
C Y
A Y
C Y
B Z
B Y
B X
C X
A Y
A X
B X
C Y
C Y
A Y
C Y
B Y
A Y
B Z
A Y
B X
A Y
C Y
A Y
C Y
C Y
A Y
A Y
A Y
C X
B Y
B Z
B Y
A Y
A Y
A Z
B X
A Y
A Z
C Y
B Z
B X
A Y
C Y
A Y
B Z
A Y
A Z
B Y
C X
A Y
C Y
C Y
C Y
C Y
A Y
A Y
B Y
A Y
C Y
A Y
B Z
C Y
A Z
C Y
A Y
A Z
C Y
B X
C Y
C Y
A Y
A Y
B Z
B Y
B X
A Y
A Y
B Y
A Y
A Y
B X
B Y
A Y
C Y
A Y
C Y
C Y
B Y
B Y
C Y
A Y
A Z
A Y
A Y
A Y
C Y
C X
B Z
C Y
A Y
A Y
C Y
A Y
A Y
A Z
C X
C Y
A Y
A Y
C Y
C Y
A Y
A Y
C Y
C X
A Y
A Y
B Y
A Z
B Y
A Y
B Z
C Y
C Y
A Y
B Y
A Y
C Y
B Z
A Y
A Y
C X
C Y
C X
A Y
A Y
A Y
B Y
C X
A Y
B X
B Y
C Y
A Y
C Y
A Y
A Y
C Y
A Z
A Y
C X
A Y
A Y
C Y
C Y
C X
A Y
A Y
C Y
B Y
A Y
C Y
A Y
B Z
A Y
C Y
A Y
A Y
A Z
A Y
B Z
A Y
A Y
A Y
A Y
A Y
C Z
C X
A Y
A Z
C Y
C Y
B Z
A Y
B X
A Y
A Y
A Z
B Z
A Y
A Y
C Y
A Y
C Y
B Z
B X
C X
A Y
B Y
C Y
C X
B Y
C Y
A Y
A Y
A Y
A Z
B Y
A Y
C Y
A Y
A Y
A Y
A Y
C Y
C Y
A Y
A Z
C Y
B Y
C Y
C Y
B Y
A Y
C Y
B Z
A Y
A Y
B Z
C Y
B Z
C Y
C Y
B Z
B Y
A Y
C X
C Y
B Y
A Y
A Y
A Y
B Z
A Y
B Y
A Y
C Y
A Y
A Y
C Y
A Z
A Y
C Y
B Y
A Y
B Z
C Y
A Y
A Y
C Y
B Z
B Z
A Y
A Y
A Y
A Y
A Y
C Y
A Y
A Y
A Y
A Y
C Y
A Y
C Y
B X
B Y
A Y
C Z
B Y
C Y
C Y
A Y
C Y
C Y
A Y
A Y
A Y
A Y
B X
B Z
C Y
B X
B Y
B Y
B Z
B X
A Y
A Y
B Y
B X
A Y
A Y
C Y
C X
A Y
B Y
A Y
B Y
B Y
B Y
C Y
A Y
A X
A Y
C Y
B X
B Y
A Y
A X
C Y
C X
A Y
A Y
A Y
B Y
C X
A Z
B Z
A Y
B Z
A Y
A Y
A Y
A Y
B X
A Y
C Z
C Y
C Y
C Y
B Z
A Y
A Y
B Z
B Y
A Z
A Y
A Y
B Z
C Y
A Y
C Y
C Y
C Y
B X
B Y
A Y
A Y
A Y
A Y
B Y
A Y
B Z
B Z
A Y
C Y
C Y
C Y
A Y
C Y
B Y
C Y
A Y
B Y
B Y
B X
C X
A Y
A Y
A Y
B Y
C Y
B Y
C X
B Y
B Y
A Z
C Z
C X
B Y
C Y
B Y
C Y
B Z
A Y
C Y
A Y
B Y
C Y
A Y
A Y
C Z
B X
A Z
C Y
C Y
A Y
B Z
B Y
C X
A Y
B Z
A Y
A Y
A X
A Y
B Y
C Y
B Y
A Y
A Y
B Y
C Y
B Y
A Y
A Y
B Y
C Y
B Y
C Y
B Y
B Y
B X
A Y
A Y
C X
A Y
C Y
B Z
A Y
B Y
A Z
A Y
A Y
B Y
C Y
B Z
A Z
A Y
B Z
C Y
A Y
A Y
A Y
C X
C Y
A Y
C Y
A Y
A Y
B Z
A Y
A Z
C Y
C Y
A X
C X
A Y
B Z
A Y
A Y
B Y
A Y
A Y
B Z
A Y
B Y
B Z
A Y
A Z
A Y
A Z
C Y
B Y
A Y
A Y
B Z
C X
C Y
A Y
A Y
A Y
A Y
A Y
A Z
C Y
B X
A Z
B Y
A Y
A Z
A Y
C X
A Y
A Y
C Z
B Y
C Y
C Y
B Y
C X
A Y
A Y
B Y
A Y
A Y
A Y
B Y
B Y
C Y
A Y
A Y
B Y
B X
A Y
A Y
C Y
B Y
C Y
B Z
A Z
C X
B X
A Y
A Y
A Y
C Z
A Y
C Y
B Y
A Y
B X
A Y
C Y
A Y
B Y
A Y
B X
B Y
A Y
C Y
C Y
A Y
A Y
A Y
A Y
C Y
C Y
A Y
A Y
B Y
C Y
B Z
C Y
C Y
C Z
A Z
B X
C Y
A Y
B Y
B Y
A Y
B X
A Y
B Y
B X
C Y
B X
B Y
B Y
B Z
A Y
A Z
B Z
A X
C Y
B X
C X
A Y
B Z
A Y
A Y
A Z
C X
A Y
B Y
B Y
A Y
A Z
A Y
B X
B X
A Y
B Y
C Y
A Y
B X
B Z
B Z
B Z
C X
A Y
C Y
A Z
B Y
B Y
A Y
B Y
C Y
A Y
A Z
B X
C Y
C Y
A X
C Y
C Y
B Y
B X
C X
A Y
C X
C Y
A Y
B Y
A Y
A Y
B Z
C Y
B X
A X
C Y
B X
C Y
C Y
A Y
C Y
C Y
C X
A Y
A Y
B Y
C Y
C Y
A Y
C Y
A Z
A Y
A Y
B X
A Y
A Y
A Y
A Y
A Y
C Y
B Y
B Y
A Y
A Y
B Y
C Y
B Y
A Y
A Y
B Z
C X
A Y
C Y
B Y
B X
A X
A Y
B Y
B X
B Y
A Y
C Y
A Z
B Y
C Y
C Y
B Z
C Y
C Y
C Y
C Y
C Y
A Y
B Z
C Y
C Y
A Z
A Y
B Z
A Y
B X
C Y
C X
A Y
A Y
B Y
A Z
A Y
C Z
A Y
B Y
A Y
B X
A Y
B Z
C Y
A Y
A Z
A Y
B Y
A Y
B Z
A Y
A Y
A Y
A Y
C X
A Y
B Z
A Y
B Z
B X
A Y
B Y
C Y
B Z
B Z
C Y
B Z
A Z
A Z
B Z
A Y
C Y
C Y
A Y
C Y
B X
C Y
C Y
B Z
A Y
A Y
C Y
B Y
A Y
C Y
C Y
A Y
B Y
A Y
B Y
A Y
A Y
A Y
C Y
B X
B X
C Y
C Y
B X
A Y
C Y
A Y
B Z
A Z
A Y
C Y
A Y
C Y
A Y
C Y
C Y
C Y
A Z
A Y
C Y
B Y
A Y
A Y
C Y
C Y
A Y
B X
B Y
C Y
B Y
B Z
C Y
A Y
C Y
C Y
C Y
A X
A Y
C X
A Z
C Y
C Y
A Y
C Y
A Y
C Y
A Y
A Y
C Y
B Y
A Y
A Y
A Y
C Y
C Z
A Z
A Y
C Y
A Y
A Z
C Y
A Y
C Y
B Y
A Y
B Y
C Y
B Y
A Y
A Z
A Y
B X
C X
C Y
B Z
C Y
C Y
A Y
B X
B Z
A Y
B Z
B X
A Y
A Y
A Y
B X
C Y
C Y
C Y
C Y
B Z
A Y
B Y
B Z
A Y
A Z
A Y
A Y
A Y
B Z
C Y
A Y
A Y
B Y
C Y
C X
A Y
C Y
A Y
A Y
A Y
C Z
A Z
B Y
A Z
B X
B Y
A X
A Y
A Y
C Y
C Y
B X
A Z
C Y
B Y
C X
A Y
A Y
B Y
C Y
C Y
A Y
C X
A Y
A Y
A Y
A Y
C Y
C Y
A Y
C Y
A Z
A Y
C Y
A Y
B X
C Y
C Y
C Y
B X
B Y
A Y
A Y
A Y
C Y
A Y
A Y
B Y
A Y
A Y
C Y
C Y
A Y
C Y
C Y
C Y
C Y
C Y
B Z
C Z
C Y
B X
B Y
C Y
A Y
A Y
A Y
A Y
B Z
A Y
A Z
C X
A X
A Y
A Y
C X
C Y
B Y
A Y
C Z
B Y
B Y
C Z
C Z
A Y
A Y
A Y
C X
B Y
B Z
A Y
A Y
B Y
C X
B Y
A Y
C Y
B Y
A Y`,i1=`jNNBMTNzvTqhQLhQLMQL
VCwnVRCGHHJTdsLtrdhrGdsq
wFJZTbRcnJCbpwpFccZCBfBvPzfpgfgzzWvjSzNP
wDWgDfWNTvwvgFfWfddGldJVprrrVdNlrN
nLnmLSnmMVJvSrHqdV
MsmsbLvtzMjFsCPDsfBwwT
WTqSCqWSWqSgVZqJHpHmHrhMMVrRhBnn
PtLGLGddGGMCpprM
jFvLPPlLjvfjjffsclvPqzzJWTbqNSWZsbSTDzCW
lLSSrfmddlNpnmLdfSPddDdbZQTZgZjbZgjcQZHQPjQgZP
MJMnhzBJVJwvGsMRhRhTsHTjZjHFctbtHZcgZj
vzvBWGJMVGwWGGhGqVBnGzVGDfCDmrqNfrrLSdpSfLSpNmNC
qGWLgfbWhqpLgZbJvTRWJTvMWRslMv
FQwPwNPCVFQQdNcFHNcwwsvslRDRTMDMsVTGJGtRTs
wQHnwnQFPNPdjnnPjhphGqBrfpBBBfZf
mpVpmtPhVtPBLLbQTJpBLZ
vzFMlMzvvRZMTbJQJQbf
srqzvRRqdvzFFrDnvqldFVtwCVCHWNqJHNNcHchCPt
CQJJLZCJLqNMMDDgGLVV
RfRFFszTtzbWTFnRtFrRrWvNHghvBVGgMffvmBVDNgGV
znsjWzstnWjbDnDbTZCpwZcjpjZqQCwSPp
jRrzzrPjLnnpQQDsjj
CTVnTlZWHTcqZBcTTTHqWscQsQDQQDsmmQfvfhwDmv
qlWFWWHTZTlqTFWZHtBVFdlTGdNzRnNngbbSrrSNNzPgPGSz
cWjbcjnssMmRPWbGsWcMbfLBFrZBBLLgZwBrlfLQZtCw
vqpvFHNvhvJzdZQZtlgNNwlrrw
JzqVVVVpzhVJqzhSzJhhDVnFjRRMsPnSRcGMRMjWjWmR
NznNGQgSRQffbbsR
jjjCLwdvLcrhqdblFJsFSPfbDP
qrrvwHqjtLmSSggpBtgn
LGPtFtTfTfTfLrrWTSWGPrrsszbsjZHzgdzSwzbHdsglwl
NhHpVpqNNqbdszRRRb
ccBMJVDNCvvhDNpvNDpnNCVCHFPTmfLTGPMQrfLGmMLWWQQL
dRgRhVLRlncZSSrtLp
WJmwvvvjQvWwFBBvFJPHpwvGWTScGsrZtttGTSsrzTsSZt
FFHJjmjjjPMvfHfwpdRqMppghdRCddDg
NDTRFSnNsVVBDVlM
JjLZWqwjHvfrvmHHvjLWWLlhPlnPlChlQhJQnnzPPBCV
mwHvHmpvwpLmjnvpvLvvNGcTTggRbdTGcbNbTTpS
GGhZQMsmGRfMwfpclgdBlbblBBZgJc
tFvFSTSDnDTTLtcFMbWcBgclJrgd
vzDtzMVtnLTTMTSjSDHtppqhsqqfGjmpPhmsRGPG
MfJtWTTMJfzBbVWPZWQbNnDV
FvlgSHSLvmCvZjgcCQQsPQQsjnbVDNVsdn
HLhclRlHRmHvmLmclLZFSFwRRRpJMtwJwfGGrrtrwfpf
scsswLQcGmQmNHCqvrsHqfff
bdnPSMMMClbBBPCdDDnDVMDWWWvfvWFfFJfNqqNVFqFNfr
bDPTlSTPPbSPjnPSbGmQLCcjLjwzRLcmCG
tFFJjMnFhdcMMJlWtdnlFczBSZGNSjGGbBGZLbZZbLGB
QRgqwwvsLssZnGCz
gqfvvnpfHwRmHTFdFcPdJJmJJc
fccTzVVcfSmdThTTFJPFgg
wLsWfppsjBrnnwjCBZnZqJJQGhBdFJddQhFqdQBG
pZrNCWLwLZLjwwWMftmNzttDcVzVvt
rZnVVjVSMcrwsNbc
dLvQLBLFddvBLzpGmddQCqNswzsMjbhgbblbcwshlb
LLCCWjGBFPmCWdmmPWLdWBpLRZDSPRnHSStRfnZnZTnSSTfJ
ddfnQRbpldRlRLgFglqGCLqsGq
BWBVDZWTBTDPvVTZVDBDNMbhcLLHsFqgvHJsLCJCGcHGsJLH
NPZPDMWZMbZrBVMDDWNmBhMVpSSRpzjjfjpwRnSpwzRzdzjr
bvPSBttgGmZwScwShS
NJspjJLdprzHgjrLzLNrnHQCmmcZQWlcQcNQwlwcQCZC
HdRJsJrdHTbqGMDtgDqT
sNVvSdTstDCtdzdzSCwTzCRhRQjfclMflppjGhffjZcN
rgWlrnLLbqbQMfMphpWjjf
BmrnrFPnnBLlqVwDCtCtVPDTzT
mJMqlVlttQlFVmzFQMQMbQMSSDNwwdSddNddwdDswRDVdR
GGZgcfjrvCCZvgCZqvPHSwRBBsBwswcwBNTDTcSR
GZppfGHGrgGprZhLthFJhFqLWWFhtq
WDHHLtRBHgDnVrWFVFBTdzzZLLjZzjjvddLsvv
JlqmMpCMCGMwbwZddTtCtv
cJJqSplpfSGccJGthFVcVHgFBWBgHgDB
tlFwbWtQFLJhlBFlWPbwmsQndTrrqdnggjqdgnTgTT
GCMBDDCvRpDVpRpHrsgdqTjqgdHcsjHd
MDDvCVGzBGfpzBSNMSRRmwbLWlPmzbPmlJlWbFbJ
fzFzFHBfnvpHFbnzbHfBHZggCGgtZCltDGggdCCVtZVD
sLMNSccQLMSrmLcshLvtCGllPtDdGgtJgmlV
cwLMwwNhQhsWSjqTqHnHbjWTvH
NWlqqhNNnGtNvvWQdrVGBBQdVrwRQr
mppCjppMrDTSgDppCDTMQVRwdBbBQVVbQdQsVB
pgzzTFFFrjHqHnqJFWnh
ncQrhQjqjVQhGsGBbhtsstTp
RllWFLRfZrGlBTbg
vFLLmfNRFSNDfSNjcwqJVrVVzQjc
mmGrgwmGDGcVWVjNNW
nDsqfPCHnpntDssfJPDPjWWhjNTTcjjhTTNcqWcc
DfPCJLpbldRrlrdwmw
dJDNbRhNbJdhqCnrWjhsTWvplg
LMHrttLFcMmcMFLmtGplCggpjjnvTpgnTTFT
czZMzrzVZzHZdNdbDDqDVQNR
sbsJgbsmzdgRgWdg
LLLFBzGMLjzzFtVFwwwCPPRCCqQQTnnCMMCMCC
GllfptwjLjlGFVFjGzpFFNbJDmprrNDsDmDvJhmcvp
SccPbfbncpcfsjbRjMBCTTFGMTCQtJtzFFFJ
vvvdgVhlmlwlgZLgmJhWQCWGGbWtWJhzTJ
NbLNDdbLVmqqmfcsrHcrpPqrcH
HcgDBJSHTCzjjnMNJjrW
VppGMwFwllwwbZZrjvnqmzmnzpqjNv
wZlhtPGPLFVFlGZbVtVTQLLBQRRTSHTSMDCgLs
HPMMnhBHlMnMBPBHJHPWfdnBmjvLZvjTvZTZDgTgTmQmZhZZ
SrzrSScrctrwVzCSCmzQjmLTLvGDvTjGbm
CswstFRNpcwVNRrVVSVwpwpHJnnWWBBHfWHlffWfQMnM
mlFMtqjvMdqjmMCCJZsRQBnszlZz
HcNgcPLcHLwtcfZBTsnsHJBJTzCQ
LGGNhbNtNLDfcgcwfbgthfwFrqqVdFMqMMhMmvShFqmvVv
NbvbBGNvhNhnhpbgpGfBvNgmRjCdPCPCCRCQmmpRdTmTPR
qqFSSqWrtSSccjMdQMHFMBjPMj
SBDSBZZZwGGZNJJg
qTdHSLSFRZRHHZVgpzhbJszchsnsLg
tDvflvrGttDCjlQfmCGvtCftczhbzwJczcJgznNmzJNhwgsp
tQlDCDtrfrtlGrjlQBHFHPVHbBbZqTZdVZBF
MTwvsQJMvvHwVMMJMQNNJRPWWjCllrlWGFlSFCpjgFVSWr
zhcmnRZmqmWjCSFrFqCW
ZbmhZcdZznZfndtwDtMMsRQTTQNRQw
ZhhVqQTvZvVhSmQZcClRCLPCgTGGLbgl
dJWHwndMHswswlGbCmclmLHbbP
dnwwNJnjBjwwdddnjndfWvmvSNZQNrVVmZvZFvvQQv
trlrlrZzsjRjdFhlpwdpnpdp
QqLvvLQmLfQTLbLTfHmqHHLqQgFBdCJBBgggCJdhgJwCggBF
DPDvqLqffqfhSVjVPSPtsj
gsnVdcBcjMMntGMh
RQZLRZlZDRJDCzCjblJSDjQZWWTWPCThMTFGNPTNttGwCFMh
pDlQbSlzpQsjVpjHVfgs
zgqtCtJltdGttJgVGPPJCtJvQFsFFbTFssNDNDsHLbTQbssP
rRcwBnnpcmBqpbLHDspTbFsb
mwRqrqrmWrZnfWmBmnRZlgClgJCJlGJzClGMtG
jlzHllmPnpHlHZBWZJJDWMBNVH
bQrhDbcLgsQrtdVCJWfCCBMMVWrJ
QhGdGcLGwwwtcDzznppPpPwlpnSS
qbpqvWFHbFHHsWwPqPpsVWZTlDcLDddddDrmrcVZDrmT
MCgSSJMCztdmcLzlrlDl
QCRMRSnNtRSqqRjsjLPPvp
ZnZrTfsWWvhVSRmzqqnn
pLGBLBgLCpgGpbdLbgMClJTmmhShSRShqSBDQSRRmQVV
dpJPldgMMbglFdrNWWjHZNccTjZP
CCZCQzwwdmMGDWMmhCMJgpnrnwsTrFNLgnpNgg
jfStHtcjqDPbPtvqvgLNpppnHsrsFgnFNp
fcqqPPPtPSfRVBBRPRPbvQzzhQWGZQVQQZDQMMzGQM
VVlDNDgppgtNltlrJPbjSzPPzjsMsjBBMWMM
LmGRmfmwCqQqbsQBMqJj
cHRcCFfmfmGLJLGFcJLFwfdlhDgptthhHpVrNVdhlvhl
vSSdnBVpscwZcBZB
mLHzqtGtNfGHHFNHMhJMthsbcJtctZTw
GHqHHGzNDNFCfqllCFqVDdPSDQnddvcpPQjdjg
CMWcwGTrvzDWzrDccDCGzTTTplZgSjggjSpSljSjBpSmgmWB
nssRttdsnhsdbFhtVFhNpgwNpBBgHHBBBBZSjNSl
PnVPVPLFtvPvTwwrQq
tlQlqlJCCJWgFrprPjpGVpQzvp
SDbwShHbBZZbhcBdDBDSTrsVpPrzzzHVzNllzGlVNv
BTbbScwRhwZLnLtfJFLFJgWl
VDfPVHfDVMMfHSPSMTVfqgFthFcFrtcdhrhDQdDmdcdt
bWGGHCplWnJNpJCCnlnNwdcwQhmmdmtwddBNcc
HpGCnZGllzlzJWjnCbbnCnRvfvsSTVVSgVLqSsLsLzPPLV
fQqcfqfSDzDWffDZ
NcCLCtPCPMtNBwdthpLhPwzsHrszsZssTsWrDrDVTNNH
twMPBtCpLBCtwMPpJcMBSjjnngqSjQQJbQjjmgmn
vQwVQQVqcJvVJvCpQBCLpdgSFCdjjWWnMSgnSjgjbj
hszPRDTVDWWWRnjWWj
TtDDZsszlPllhPzmPVGssTPpQLcpvpBpZpcfpvrvQvBQLv
sRmGqqzzzgCtRrttCP
cffSwNDddTdfGWtgNCrtGMPP
GGcTwHwHvjqLLjLvlJ
JSdjLJMBdMSrfwwLpWgzWmvDhggzWvfmgD
VsRtVllstHHNllsQsHQRzchcnDmvmvnRvvvcnZ
tGVGCTTTtTFVbsTTNTHsTTqBqBLrBCjqBwqJwqBzLqzw
MhjTJjlSDrplQvFQ
RHttqbNGGmbbLmLmdqbgnFQwrZswQrwDpFpppdwfvQ
gCNmDHHRCLHnWWSCjhWPShPz
BvzpbBwBmsDrmGVgZFDm
TnNRdtlRlCdFFGTLffrrGf
jltNtRCPSlPNtcpwpGzjMBpvbhps
hflJphNDmmbpfnfplbcvLsHVLsrsZsVvCb
FgTFWqTBfFPfFqQqTwHsHccVVLQCZZZCVH
BSSRTGWBgFggBWgBGStTGpzNztmjjzhhzDfNnMjnph
mDDFjjFmVlTZJttffD
hhRvNNCvdNMRLzhSzpptwslNTfNQntsJQZZTlN
WCdMzdMzhMdvRvLhCRLPvjgHmggmbmbblgWcGmcbcG
cScMdhsDhDDdvGzZptzGcnGtpB
NPWjJqrjJWwrSFWRJlrlNWJLtZznLBBzZznLqnpqnpnznV
NWNQwNPjCSQTQhTd
fVVCVccppZMZMMCBzJTNJHWZTWZzNF
QrmmPhDqPhsPRhrlbgRDbbPDJNJTnJzmzzfNNTNHNJNWmnvF
DgbPLbPsQsrbsqLbgllsQQptfwSjwtVLfwdcpCjVwwSp
ZlsmlrZZJcQmhBhlNrsrJRRbRCRggRbzGCRHgRCDGB
fMFvdfVTTdjWTTTfvSjVjpjzcCbFHGPHPDbPHRCFGGRHHG
cdvfSWjfjpdVqSwSvMdLrlrmhqZhhrrLLJQhNr
sWVVmDJsNWNjcSNJZcNcZWWsHTGHTChhHGtHsFFbbsfHhH
nqPRwQRgpQRPQQgMQgQLQqBhvTRtfdfvfCbFtTFFFTtvff
qgrPMLLPpVlbDrVrWD
VcGjcCHcVHPrGnjQDQgDgQDFtdglRtlQ
bWWhfzJhvZWJzNpmRTtsDLDgRTsNddFT
MhJMhJbMmSZbJZwSCtjqcGrrnGjC
FCvpgDsZNsCbvvvpVwcDrjcrmVMwVwHJ
fhfWdPhhhhRQQqzdLSRHRHJjBTTmcrTMrMrwmczcwwTz
qndhdQWndftfhWStfLQQfWgFNsgFpHCtgCNbGZZlZCll
mqTCNhTNmGTLwLNfLrSrgZHDvfPDPv
cjsMQppsFnFslnRQQGMDHGZHSgzHPDZDSf
stWFjcFFsJlQcQtwtbVwCmCthmBTGb
fmsffcqhmqPsnTCnCcQpzjSSNpBWBTQpVSSD
vHbgLRvvvzdgjVVjWg
WltLWvWlqcChrhlf
CtwjffWrdznRtzCwLsmGLlLMsMmMGb
cZFFbgPgJZDchMMPVsmlPGmG
SpNFJBJccNgDcTJJTdbStbnntrCdSrjWnb
qWzgNFqzqHNTBzFNCZCGPpPlHmdPblls
rfSJRJnhhnJDjrfvRStCmpdGsdlDpZZZPbPCmW
cffRvfnnVRjFTWVTLQMFWN
VcHhVrVCQQWhffzcRZznnZFf
dDSCGSsSblwDdmLqvnFZzNZplfpfRZfBnl
tCCwGmSqbqtwsVPjVJWtJHHhQV
fvvTcWzGcCJrJGJvvHMbZTmRQTbpMdQQsR
SgFhVgllLgjLgwlwljFqVFSFdjmBHmZdRMdZpbjpmpjBsHdM
LNqFnlDgVqllwLFLnVSgLFZtCzzzzvCGGccCCDCfvJrv
FczpzmSjVVpSQrzzcRpRcrwqMtJqwtvtLHvQwtLtnJMw
TvbGGbNfGCBBLHtJBHDZDMqD
shgdNTGgvNsflspcPjzVdmppczrV
JHLPLTsSllgSSPPSPLTRTdjCZGZDGGgCdqZtZCZdZt
mhFpnpFwqdGbdFDt
prpWcvnmhmpccBBJMJJlPWLHMDSDWW
GcMcjDbDMMjqHBHVlHvv
rLCrwNJCnwrZNLWQQwzQpRqQPlBRVVBRvvtHqf
zhnrnzdrCwLJCwzwCMGcbdFTscTmgcFlgc
cnwlFrdMsggblgsrMbncwrsWzjGBTjznBzWNzPzTzfjTzf
vvVVHSpQvvRQDJGGLWGfTLTBLQMN
hCmJqVvMSpqqChCJHDZrFsdhrtgFhttZZhts
sfDNqLNpqpzCzLsDqzbCVWRhjTNhShTjHmmjjhStBmvT
wZrlwJwFJGlFMTjhBBZTSTRSbv
wrQrgnPwMsnLbfffVc
hDcwwGWhMMssTcdM
NQmLbNSZHQSHSNpbvfdqfRsZMqssjqdd
LNVtLSSHLSgLNrgwJgJGnBwFMBzD
CRDfCbfjcnRCBVfjVMfMjZpPptplPWtppStpSlBqlq
HdTFLGsdLrzNWtvqPTcpgPZl
JLGmmHrwJGwhjmfMcbDjQC
VShGpPbWjcPCcTLcPN
HqfqDfDFFJDvZRJvqZRRqHZdNcwjllwvQQLQlllccwclCMCT
FddsFmJjjrgGmbSSpS
NRFFLtFtqFLGsdnGbQSs
ljMfMBDlJHgBVHgVflfnwdsSQQbddsSsqnqGfs
PlzDzjljzqRzWzZW
dtzZZbctPzwdlzRwlcdfRgtQJmFmhPSmmSsQQFhsmqSFvm
nDjHnNjjjMnfjNTMWhHQWJSqSSQmhqhm
CDpVCfrjLnnfwtBcpdcbcBZt
sssZSZtDfHbbdtBTCRBzRDFJCBLp
jwWgmWlNQNLlcjWhgQlrQQWrCCJJzFCMVMTzpBMMCVCMTwpT
ggLgrqljLlGvHqttftbP
cSGBFsFcSRZSQGsgBNgVMwMhDQDVfqPjMhwwVq
vnCTLlrpPlHzzjbMfqpbww
rJCnlmClvWvLrTmtTlZcZWSSWPGGdNcFGgcR
lfDDvZZSvLtDtCQZltCqVBWVBCbHJjRdNqWq
pGGhhzMRcqMBqMdVBN
mzgwGrrwhThFGPmGPcFGpwStTfltfDftStDsQRsflDQl
LjnSjLZLBcbBdDqzND
rrfhfMRmpsghfrhGhgQrcPNtZcqNCqdCqPzcNZMM
ZTTgvRpmfffpfgRRhWnVSJJLLWnvJHFlFH
lstcGcttdczzsWVCvQVLCHHnQHWL
rjmJrmfmJMqvQTLvqfGG
JbNrjGjGrMDRJghZggcchhDhzc
tftJQwCgSjpdWHjbRJ
DcwvlZBmGvHjdbczcRpb
sqwDlsBvGNSMQTCNfCTC
DwDrtvMHtBCvcpDcjCMFtBCblJfJGJbZlfzrRlJdbRdZld
sPLPmqhSnLQQSWqlbzRRhfJCJfNJhZ
mVCnWCsQqqLTPWmnDVMFVtHFtMBFpjwM
scChGddJztdNswNsdDsthvmpVmRVcZjmvVvRSMZVSZ
lQLCWgWHCWbFPbbbHqLnLPHHVMpVRgSMmZVSBZBjZVSjRBZp
QrTlTHbPnTsJGtsDdGCr
fMjgFqtFWMhtjcNQSDMmNlCCDMQN
sVHdHdJHwPGPGwwbpJGTbGTvClldmvRSnvlDlLLSlvRnQl
pJbHPHJGVbBswpTcfrBtrhmtrFczzq
SDGSDGVPqqqQPGrTQVTQDrSrJfHJgqhgJqzhJJmWfHpWpzmg
twCdCWMLwbtLLjBddgfcJgRHfRRpfcpRHM
FZdbvFFbVvsWsQsW
rzrRgqGrwgjRVqJCHLzCCWhtDbCC
dTZnNpvBvnJdBpBnsJPvsSCbthLtLbbQShQQLHtSST
BlplPmdlFsslfJmmRfwfwMjw
PPHSrmfHTnmHnHBzRhbFgfbFwzQg
LcsVsGtVLtLqpzwBvgzQRgTTTp
TjLJGTTJWJZZWWZS
tHcshJcJRhLsQscVtccJLRHfvlPjZFSvmvSbvfLFfFFbGZ
drwdTNlwwBTpCdCdwGPrrmjjmjmbSjFPrF
wglnzCDpJtQcztMR
bbMjTbBvgjZNSqldTlVt
wwrcFwsrsnnCQzrCsLnRsQZcNlpJVZHdttZVttSZqJZd
GwLnrsmFCCzqzhvPbPmWmvvfjj
dcnwQdcdrJdSwSFBBqfBfwMqfBfzsh
RgmZpWlCClRlTgBZbhHJJsZjfBHZ
DlNVWgWpgDCCNRDJFcrtQGrrVnrcFPtc
sWSHsdSrHWHsbdsddBsbjmfwffmJDJwcfDQgfvwJDj
ZNGPhRqCCRNGNwSDvmmwwgDhgf
lGlTLTGTSVVFqVTqsFHWntbWBsBsnBHb
QRRgRvDwWDVjmSbDnbTDlDnbqS
rHCPPHrcLFJcllqbTlpq
CldFrNFsgVhhhWgN
qSfMgNqfpmSmlQrRFG
cbBczbtbZTcPWzcrTrmRrLGFTQQFmJ
PBZChtzzcWPcZtBvPjtzBBCfHMMNdDgDpMfVfVpHMqNR
LJPPCHtgtLDfFfvTLwfv
pVGWGGjjjplhpGGVjWnldsvrrMFvfDMTWBdFrfFF
cjlhShjchhjGGmNVjplcQgmTPtHPPJmQgQHgtqgZ`,z1=`8-82,3-96
13-95,99-99
4-92,5-93
16-80,16-80
23-36,6-10
82-98,24-83
48-48,47-48
58-81,58-80
14-14,13-98
46-66,45-46
38-73,37-72
46-99,47-47
15-59,6-56
13-54,12-53
60-61,60-71
4-97,2-97
6-94,6-94
47-48,38-48
10-95,10-95
84-87,86-86
51-88,70-84
3-52,51-53
21-55,21-21
55-84,31-56
18-18,19-75
63-76,64-77
44-94,93-98
9-62,2-4
29-34,28-33
14-97,15-98
10-56,10-56
3-92,4-93
44-92,45-93
7-73,6-72
12-96,12-12
17-83,82-83
8-94,9-97
1-96,2-96
82-93,4-81
45-62,3-62
91-96,3-81
69-87,68-95
43-67,44-55
2-99,87-97
41-47,40-48
84-99,21-84
9-47,8-46
7-86,31-37
44-95,28-99
1-96,6-94
79-79,1-80
44-62,44-62
17-17,16-62
19-80,19-19
31-54,12-53
62-91,90-99
1-99,3-99
28-63,29-63
46-78,61-78
16-24,23-91
25-77,24-24
58-99,57-98
46-86,8-87
44-44,45-77
36-71,51-71
26-79,25-79
4-69,44-53
33-78,95-99
46-67,23-47
16-51,15-50
72-91,28-72
96-98,10-97
4-98,3-98
3-98,8-96
92-96,6-93
62-99,97-99
2-2,1-24
23-25,24-90
14-77,14-78
95-95,3-96
18-78,8-17
34-92,33-91
4-4,4-4
28-59,32-60
30-32,20-31
75-80,6-76
17-78,41-78
9-94,9-94
52-67,51-68
63-97,78-96
85-89,10-86
1-52,51-51
8-74,7-93
58-73,26-74
3-96,96-97
14-30,15-29
13-77,12-76
99-99,7-93
13-94,93-93
3-54,1-54
50-90,50-91
58-58,57-72
17-18,18-91
2-30,6-30
91-92,74-92
32-82,31-83
41-52,42-53
93-96,60-93
53-70,53-70
69-97,69-70
3-54,3-55
41-55,6-56
46-48,47-48
10-42,9-9
75-80,3-76
43-56,44-44
60-61,60-69
31-93,32-92
12-63,13-62
94-95,46-95
68-68,1-69
22-89,18-95
14-32,17-33
10-75,9-76
31-96,31-97
85-85,5-86
22-31,21-30
23-77,3-94
44-44,45-45
86-93,14-93
67-99,67-97
38-95,37-94
19-21,20-24
71-71,11-72
8-47,9-47
45-78,46-46
8-9,7-8
95-97,4-96
25-78,78-79
68-68,68-85
68-78,10-89
6-80,5-6
9-88,8-8
13-92,63-93
97-97,73-98
8-45,8-8
3-93,9-92
93-93,28-94
8-78,9-79
8-95,1-95
39-66,39-65
3-32,2-33
24-36,4-89
36-96,36-96
9-73,9-10
72-87,72-75
11-97,12-96
50-79,78-79
93-93,80-94
35-95,23-94
1-89,89-98
15-97,15-97
67-86,42-86
18-49,17-48
6-93,10-87
35-56,66-77
14-99,14-98
48-62,18-63
37-57,36-38
4-6,5-72
59-93,59-94
25-69,25-70
8-78,77-77
73-73,74-91
23-34,34-63
35-96,91-96
32-71,33-70
60-81,61-78
2-80,80-81
16-85,35-57
29-70,66-67
68-84,55-84
26-66,27-27
29-74,28-80
89-91,49-90
34-35,34-54
13-96,12-96
20-45,19-56
48-97,49-96
68-70,12-69
4-95,94-94
20-84,19-83
32-34,33-96
23-53,24-52
9-11,9-9
29-30,30-63
20-80,20-56
76-95,1-76
2-68,1-67
3-60,59-59
2-22,3-23
78-92,82-91
29-99,39-99
38-46,26-33
42-61,60-60
23-23,24-24
92-96,29-92
8-90,89-89
21-29,16-29
6-75,6-74
9-11,10-38
46-80,18-90
59-65,58-58
9-91,8-90
87-91,88-91
11-95,91-96
38-95,38-97
12-97,8-64
49-54,42-93
90-90,88-91
44-80,43-43
29-88,30-87
91-93,63-92
3-83,2-3
17-94,93-95
8-91,3-7
1-92,1-93
98-99,37-95
31-31,31-63
1-96,1-97
49-94,49-81
19-84,18-85
14-91,91-93
30-41,41-50
22-39,38-44
17-93,5-98
2-79,3-3
63-93,39-93
86-86,59-88
37-47,37-38
6-68,1-68
97-98,84-95
86-88,1-87
17-87,17-81
30-55,32-34
4-4,5-89
6-97,97-99
15-97,14-98
95-96,67-93
14-39,13-40
5-78,77-78
12-48,13-38
67-83,20-88
5-90,4-91
52-74,53-73
11-96,29-96
11-27,12-27
16-47,15-48
91-99,13-90
35-89,36-36
9-12,3-12
19-19,20-78
18-78,17-17
10-42,11-11
16-16,15-86
16-34,20-34
19-99,3-72
32-88,33-89
76-78,21-75
25-65,25-66
8-93,8-94
8-9,8-55
61-67,22-67
10-63,36-62
5-93,5-5
13-88,68-77
9-30,8-30
87-89,24-88
20-51,47-51
57-59,12-58
25-75,16-94
92-95,46-92
31-94,32-95
1-76,3-76
7-59,8-69
26-58,27-57
16-59,15-63
47-49,21-48
25-68,24-88
89-89,48-90
21-72,71-71
66-79,65-78
54-55,54-55
45-88,8-89
38-68,56-67
2-82,37-65
17-73,17-73
74-80,11-81
10-56,1-99
32-72,11-31
7-40,6-65
5-49,48-57
14-15,15-81
61-83,91-96
19-87,20-86
6-67,6-68
49-95,48-48
26-28,27-32
39-62,39-39
1-78,4-78
23-87,35-35
1-1,2-79
9-40,10-40
11-96,3-12
69-72,3-73
70-85,16-70
76-84,42-75
52-53,10-53
3-15,4-14
13-83,12-13
19-76,68-75
25-43,25-43
55-60,55-60
25-52,5-24
1-91,90-90
61-79,60-60
33-39,33-39
5-14,4-4
65-67,66-79
8-9,8-98
3-86,85-85
10-42,9-43
2-25,87-98
4-77,3-3
34-87,34-98
72-77,71-71
78-97,25-78
8-9,8-15
3-97,1-5
65-90,40-66
13-77,51-77
95-97,5-93
21-61,20-60
37-96,35-98
28-96,42-96
13-81,12-80
63-70,40-66
73-93,92-97
30-87,31-88
79-94,80-80
42-56,1-43
16-41,15-42
16-74,16-74
52-59,51-60
77-82,26-76
3-13,9-12
2-77,1-78
4-86,5-86
1-80,2-31
31-95,31-83
38-70,71-81
36-77,1-78
9-86,87-94
9-56,11-56
1-96,1-95
81-88,81-83
11-74,11-75
4-97,6-89
25-78,24-79
12-36,13-37
6-97,20-97
2-91,90-92
64-67,66-90
36-44,36-37
23-23,22-24
36-66,37-61
23-33,29-32
32-97,32-97
30-95,38-95
12-99,34-89
13-98,15-94
11-90,10-91
68-94,67-93
13-93,12-94
11-91,10-12
62-72,56-62
23-70,24-69
93-93,7-94
21-67,66-72
14-44,13-43
57-81,58-82
20-73,72-86
34-34,33-51
14-21,20-22
17-41,17-42
37-64,36-68
22-89,22-97
3-86,3-4
81-91,14-82
47-90,89-91
11-56,5-56
34-80,35-65
18-62,19-61
84-96,23-95
83-87,33-69
83-91,76-91
23-60,22-22
5-7,4-8
21-22,21-94
11-56,12-12
15-81,14-15
5-5,6-69
41-73,41-74
4-22,3-23
10-97,25-91
31-37,30-30
40-69,25-69
49-72,49-50
16-76,75-77
64-95,63-96
33-86,33-86
26-26,25-57
7-91,12-91
19-97,18-96
19-70,18-70
3-98,1-65
9-55,55-96
34-83,51-84
3-6,7-98
23-24,23-25
16-85,16-84
35-97,36-98
4-12,9-12
2-98,1-97
6-79,80-81
4-5,4-25
41-53,40-70
6-94,7-7
1-96,2-95
8-83,7-8
9-31,10-45
21-57,20-58
20-78,19-77
10-10,11-98
11-77,6-78
94-95,93-96
55-84,56-85
31-78,42-78
4-88,92-98
5-74,74-93
1-98,1-99
6-84,18-28
3-90,1-92
20-92,19-19
91-91,90-90
7-99,7-99
11-95,12-52
8-8,7-90
6-70,5-10
26-92,91-93
64-90,65-89
90-92,31-91
6-7,6-99
21-75,10-92
1-95,74-96
59-64,61-61
7-15,4-14
4-97,4-98
60-60,61-90
2-99,6-99
19-84,19-83
3-36,4-35
28-37,27-95
8-9,8-89
41-58,41-69
7-72,4-80
1-20,19-79
16-67,16-66
4-5,5-99
7-20,8-19
5-99,4-98
19-37,18-37
11-33,30-33
51-70,69-69
56-96,50-56
21-79,20-80
78-78,3-79
73-97,72-72
8-80,7-81
17-18,17-88
50-83,36-50
18-20,8-19
25-31,26-30
10-92,9-91
58-98,59-85
5-95,96-96
20-97,19-21
8-97,7-8
4-83,75-84
1-68,1-69
18-38,18-38
89-93,21-90
6-84,7-85
20-90,90-93
80-90,87-91
12-96,6-11
56-77,55-76
26-28,5-62
5-87,6-65
37-39,5-38
5-5,6-56
5-94,5-93
46-63,47-63
7-88,6-87
20-93,37-93
12-97,5-99
37-87,37-87
26-99,17-25
26-70,22-70
68-70,48-69
23-31,24-24
17-32,30-30
18-18,8-19
41-58,37-59
16-61,15-61
4-98,4-4
4-4,4-96
27-61,26-61
21-29,22-24
11-14,10-15
65-99,65-66
12-95,11-11
8-99,9-98
43-58,55-56
50-51,35-69
39-39,40-76
50-52,18-51
3-88,3-89
46-53,46-79
45-88,44-87
23-95,22-24
2-90,3-89
7-7,7-39
1-85,3-49
62-69,45-68
63-94,63-94
1-2,2-53
24-73,25-74
22-69,13-69
1-97,82-98
2-41,41-81
10-96,11-97
56-71,70-72
2-75,2-75
31-49,31-50
21-81,19-81
68-69,15-69
39-39,39-39
30-30,30-31
55-83,55-82
82-83,59-83
49-74,49-49
18-39,17-38
14-80,22-80
10-78,9-10
32-90,11-97
19-73,9-18
65-73,66-73
47-68,49-68
41-71,40-70
20-37,30-37
2-25,24-95
36-84,44-85
64-64,10-65
13-60,12-61
89-89,17-90
35-86,34-94
34-34,33-41
20-44,32-32
1-61,3-97
50-51,50-96
29-30,30-61
2-96,96-99
9-32,3-32
20-29,23-28
18-62,18-76
90-95,43-89
42-80,26-96
43-93,42-81
13-97,14-99
46-90,45-89
1-93,93-94
5-5,6-84
86-89,35-86
25-79,24-80
17-25,18-24
10-79,47-59
7-72,2-6
15-61,15-62
6-28,29-92
52-69,70-70
3-4,3-97
69-88,1-98
13-18,19-32
83-85,18-84
9-29,8-28
55-89,90-90
24-71,30-71
94-96,45-94
3-3,4-84
13-98,12-12
5-95,94-96
4-70,5-69
23-90,22-89
56-62,61-62
39-84,84-84
44-60,45-61
49-58,4-87
16-36,17-37
44-45,44-79
46-61,60-62
4-61,4-34
78-78,77-93
38-93,3-92
67-85,70-72
87-87,5-88
5-30,4-31
56-88,51-57
5-75,72-72
11-64,14-65
34-83,33-35
80-99,27-81
31-82,30-81
62-62,63-63
12-85,16-85
19-43,17-44
41-42,41-81
6-79,7-80
22-84,83-85
19-19,20-20
11-98,97-99
8-76,25-55
53-53,53-71
12-79,12-44
79-85,84-86
33-46,1-76
8-77,7-76
5-69,6-69
37-57,50-58
82-84,6-83
2-98,3-99
33-36,19-82
19-92,18-93
5-5,6-97
1-38,2-37
15-19,15-19
45-77,44-46
2-59,21-60
41-66,38-65
15-48,10-15
8-97,7-99
23-95,95-98
59-60,2-60
29-30,29-30
18-62,24-62
6-97,6-98
5-92,91-91
98-98,13-99
16-80,5-16
1-77,2-67
5-75,5-75
70-70,5-71
30-71,13-90
30-82,74-80
9-10,9-98
9-90,9-9
62-64,61-63
14-51,15-63
68-97,67-69
80-92,2-81
1-97,1-98
5-96,5-96
15-44,33-39
29-84,83-84
6-24,7-91
6-27,7-28
5-97,1-99
68-77,30-76
7-82,63-63
3-71,2-70
6-36,6-6
4-62,3-63
47-98,46-47
34-62,36-61
3-69,1-70
66-96,65-97
21-69,38-46
10-40,37-38
42-96,43-43
19-57,20-48
50-91,78-91
45-67,44-67
7-86,85-87
2-95,94-94
46-46,45-98
33-85,99-99
81-82,77-82
41-43,42-63
7-64,6-63
3-4,3-88
26-97,23-97
1-2,1-93
6-77,6-7
44-49,46-92
46-80,19-79
70-95,22-71
77-95,28-65
1-18,19-73
48-97,30-97
20-44,45-81
15-82,16-81
2-33,3-32
94-95,94-97
23-36,22-29
14-50,13-51
46-50,7-45
74-89,41-75
16-31,30-30
77-99,5-78
1-70,1-70
17-74,17-74
48-49,48-77
29-95,67-68
30-30,29-31
95-98,26-96
1-4,5-95
62-62,33-63
7-85,80-81
34-77,34-83
27-84,28-83
25-45,38-45
4-99,3-4
94-96,14-95
25-99,24-24
14-88,14-89
1-9,8-99
86-92,47-66
36-37,22-54
9-91,10-90
5-61,8-89
14-96,15-15
3-94,49-93
2-19,2-20
62-97,13-99
94-96,5-95
1-75,6-76
17-81,19-82
35-93,59-98
9-42,7-41
3-5,4-98
84-93,3-84
1-64,4-64
13-86,13-86
34-89,33-90
77-79,65-78
57-59,14-58
54-58,53-55
78-86,85-86
47-99,47-99
26-43,24-30
1-63,62-85
87-87,87-88
31-82,30-31
58-84,34-85
44-67,45-68
7-11,8-8
7-69,68-68
4-85,86-86
56-57,57-89
13-92,12-92
1-96,13-26
56-66,56-91
37-37,6-38
74-98,26-75
3-83,82-84
2-97,19-98
90-96,38-96
4-21,5-21
42-95,41-41
28-28,1-35
6-73,5-57
28-90,90-94
3-83,3-82
5-5,6-59
22-23,21-50
35-61,34-61
7-87,7-87
20-93,19-94
9-78,8-78
3-61,2-3
45-61,61-73
19-72,18-73
78-97,77-98
19-91,15-20
36-36,37-67
33-93,54-93
13-63,12-90
3-99,7-97
18-78,14-17
85-99,28-99
48-99,49-98
40-68,12-67
16-51,15-85
94-98,79-95
65-69,50-68
41-42,42-75
7-43,8-44
26-95,26-96
2-99,7-36
49-53,1-99
25-25,25-35
47-83,47-48
49-52,49-49
26-94,13-25
6-72,7-71
16-33,2-28
3-51,3-51
9-66,50-66
37-91,25-98
4-96,3-95
67-73,48-72
22-86,23-86
40-49,45-52
53-68,55-66
38-50,37-49
1-86,5-85
35-62,36-62
7-62,12-86
15-30,14-16
47-65,48-65
3-85,50-84
15-98,14-16
56-66,56-57
29-30,29-51
6-45,5-46
49-93,21-92
11-38,11-37
9-42,18-27
29-38,28-80
7-8,8-91
66-70,65-71
20-91,21-21
22-83,23-82
5-38,6-39
26-28,27-97
5-65,1-85
14-94,15-94
20-97,21-96
95-99,11-78
21-83,22-84
5-91,5-90
39-40,40-86
9-54,8-53
8-99,61-71
29-38,28-50
18-96,19-97
5-80,4-81
7-99,40-54
95-95,4-96
80-89,36-79
2-63,56-69
7-29,42-99
11-23,1-23
13-52,12-51
18-96,19-97
20-68,20-67
3-95,1-95
3-88,2-89
31-32,31-88
8-98,8-98
5-98,4-6
2-2,3-96
27-69,27-69
2-96,1-3
5-87,3-57
20-42,19-43
7-8,8-8
10-60,11-67
16-81,19-81
74-84,73-83
13-93,92-92
68-70,42-69
33-34,33-63
7-70,6-70
13-88,14-87
8-41,40-67
50-85,51-86
27-61,30-61
63-73,72-73
4-53,55-80
3-72,4-71
4-98,3-98
38-64,37-65
42-42,39-41
77-88,87-90
45-86,85-87
4-87,4-87
21-22,21-57
28-92,30-91
4-13,1-77
13-36,35-72
7-8,8-62
8-68,14-78
24-92,4-92
10-50,39-47
4-57,3-56
31-31,5-30
41-41,29-42
65-97,3-96
43-75,74-76
94-94,3-95
28-48,29-47
62-72,6-72
20-97,19-96
46-59,38-58
55-86,56-87
29-56,30-55
2-90,4-89
15-15,9-14
10-92,91-91
63-63,62-64
66-70,8-98
44-92,1-91
2-80,8-42
36-50,37-52
4-54,5-53
5-88,3-88
60-96,61-97
11-24,10-24
81-83,9-82
4-97,3-98
36-76,35-77
34-40,18-43
68-69,24-78
84-86,80-89
39-94,22-79
57-93,72-93
59-78,79-91
7-97,8-98
7-27,6-88
1-6,7-15
13-86,13-14
25-27,3-26
33-75,74-75
68-87,68-69
72-96,72-97
23-36,32-35
97-99,32-77
23-64,64-86
82-84,48-83
1-93,1-93
83-93,14-93
12-97,96-98
3-22,4-59
32-77,31-76
25-92,62-89
18-20,19-33
34-73,65-72
31-82,32-82
3-92,92-97
1-99,1-98
4-98,4-4
13-84,14-83
13-61,62-98
14-15,15-48
29-76,75-77
22-75,23-85
5-5,4-87
7-51,20-80
14-65,2-13
78-85,78-98
7-97,8-97
11-67,6-10
5-72,4-97
96-99,19-97
33-48,6-49
24-24,25-47
25-82,24-81
3-91,7-91
7-72,8-71
10-35,9-11
2-2,2-99
30-41,31-42
10-66,2-66
4-77,1-77
13-13,14-89
79-86,86-91
4-86,3-87
47-92,47-92
18-32,17-33`,Z1=`    [H]         [H]         [V]    
    [V]         [V] [J]     [F] [F]
    [S] [L]     [M] [B]     [L] [J]
    [C] [N] [B] [W] [D]     [D] [M]
[G] [L] [M] [S] [S] [C]     [T] [V]
[P] [B] [B] [P] [Q] [S] [L] [H] [B]
[N] [J] [D] [V] [C] [Q] [Q] [M] [P]
[R] [T] [T] [R] [G] [W] [F] [W] [L]
 1   2   3   4   5   6   7   8   9 

move 3 from 3 to 7
move 4 from 1 to 9
move 5 from 6 to 3
move 6 from 9 to 8
move 2 from 9 to 5
move 4 from 3 to 7
move 1 from 3 to 6
move 3 from 5 to 7
move 1 from 2 to 1
move 4 from 7 to 8
move 17 from 8 to 7
move 1 from 6 to 2
move 2 from 6 to 7
move 1 from 8 to 3
move 2 from 4 to 6
move 3 from 9 to 6
move 5 from 6 to 3
move 5 from 2 to 1
move 9 from 3 to 4
move 20 from 7 to 3
move 7 from 5 to 3
move 6 from 3 to 5
move 4 from 1 to 9
move 4 from 5 to 6
move 2 from 1 to 8
move 2 from 7 to 3
move 3 from 6 to 3
move 2 from 5 to 8
move 2 from 9 to 3
move 1 from 9 to 6
move 2 from 2 to 4
move 26 from 3 to 4
move 28 from 4 to 6
move 8 from 6 to 1
move 4 from 8 to 6
move 1 from 9 to 3
move 2 from 3 to 6
move 1 from 3 to 9
move 26 from 6 to 9
move 2 from 7 to 3
move 5 from 1 to 4
move 1 from 1 to 4
move 1 from 6 to 5
move 1 from 2 to 5
move 2 from 3 to 7
move 2 from 5 to 8
move 10 from 4 to 5
move 1 from 6 to 1
move 1 from 8 to 5
move 2 from 7 to 2
move 4 from 4 to 3
move 4 from 7 to 2
move 2 from 1 to 8
move 12 from 9 to 2
move 5 from 2 to 3
move 3 from 3 to 1
move 1 from 1 to 7
move 6 from 3 to 8
move 1 from 5 to 3
move 10 from 9 to 1
move 7 from 8 to 7
move 1 from 3 to 9
move 7 from 7 to 2
move 3 from 2 to 9
move 6 from 2 to 9
move 5 from 9 to 1
move 7 from 2 to 1
move 21 from 1 to 7
move 2 from 1 to 2
move 5 from 2 to 3
move 2 from 4 to 3
move 10 from 5 to 4
move 11 from 4 to 7
move 5 from 3 to 1
move 1 from 4 to 2
move 2 from 8 to 3
move 7 from 9 to 3
move 3 from 9 to 1
move 9 from 7 to 9
move 1 from 3 to 4
move 3 from 9 to 4
move 5 from 9 to 3
move 4 from 3 to 8
move 22 from 7 to 8
move 10 from 3 to 5
move 1 from 9 to 4
move 8 from 1 to 5
move 3 from 4 to 9
move 1 from 3 to 6
move 2 from 1 to 7
move 1 from 4 to 3
move 1 from 4 to 7
move 1 from 2 to 1
move 1 from 6 to 9
move 1 from 3 to 7
move 1 from 1 to 7
move 4 from 9 to 3
move 22 from 8 to 5
move 37 from 5 to 9
move 37 from 9 to 6
move 3 from 7 to 9
move 2 from 8 to 6
move 1 from 9 to 3
move 2 from 5 to 1
move 1 from 2 to 5
move 7 from 6 to 4
move 18 from 6 to 2
move 1 from 3 to 7
move 1 from 5 to 4
move 1 from 8 to 5
move 9 from 2 to 5
move 3 from 4 to 6
move 2 from 2 to 7
move 5 from 2 to 3
move 1 from 8 to 1
move 1 from 9 to 4
move 2 from 7 to 8
move 7 from 3 to 7
move 3 from 1 to 3
move 1 from 9 to 5
move 17 from 6 to 2
move 12 from 7 to 9
move 1 from 4 to 8
move 1 from 8 to 4
move 4 from 5 to 2
move 2 from 8 to 9
move 3 from 4 to 2
move 3 from 3 to 7
move 2 from 4 to 3
move 8 from 9 to 1
move 1 from 4 to 2
move 24 from 2 to 1
move 6 from 5 to 1
move 1 from 7 to 4
move 3 from 2 to 8
move 3 from 3 to 7
move 1 from 4 to 6
move 2 from 8 to 5
move 3 from 9 to 4
move 1 from 5 to 3
move 1 from 3 to 5
move 3 from 9 to 8
move 1 from 5 to 7
move 5 from 7 to 9
move 2 from 8 to 4
move 1 from 3 to 2
move 1 from 7 to 3
move 1 from 8 to 5
move 1 from 2 to 9
move 1 from 6 to 2
move 2 from 9 to 8
move 1 from 3 to 7
move 24 from 1 to 3
move 1 from 7 to 6
move 3 from 5 to 1
move 1 from 4 to 3
move 1 from 8 to 6
move 1 from 6 to 4
move 1 from 5 to 4
move 1 from 8 to 5
move 1 from 5 to 7
move 1 from 2 to 5
move 1 from 6 to 3
move 1 from 4 to 9
move 1 from 5 to 7
move 2 from 9 to 2
move 3 from 4 to 8
move 2 from 4 to 3
move 11 from 1 to 9
move 7 from 9 to 1
move 9 from 1 to 9
move 1 from 3 to 7
move 3 from 7 to 4
move 2 from 2 to 6
move 2 from 4 to 1
move 1 from 6 to 7
move 22 from 3 to 7
move 1 from 3 to 5
move 1 from 5 to 2
move 1 from 6 to 7
move 5 from 1 to 9
move 1 from 8 to 5
move 1 from 2 to 1
move 15 from 9 to 4
move 6 from 9 to 6
move 14 from 4 to 1
move 5 from 6 to 2
move 1 from 5 to 1
move 9 from 1 to 4
move 5 from 1 to 3
move 3 from 2 to 6
move 2 from 8 to 1
move 5 from 1 to 9
move 10 from 7 to 8
move 3 from 3 to 8
move 2 from 8 to 7
move 5 from 4 to 9
move 3 from 3 to 5
move 1 from 6 to 9
move 1 from 3 to 9
move 1 from 3 to 6
move 1 from 3 to 7
move 2 from 6 to 9
move 2 from 4 to 1
move 13 from 9 to 8
move 2 from 1 to 4
move 6 from 4 to 9
move 1 from 6 to 2
move 1 from 2 to 3
move 3 from 5 to 3
move 4 from 3 to 2
move 7 from 9 to 2
move 1 from 6 to 4
move 4 from 2 to 5
move 2 from 2 to 1
move 4 from 5 to 8
move 1 from 4 to 2
move 6 from 2 to 1
move 2 from 2 to 1
move 22 from 8 to 2
move 16 from 7 to 4
move 14 from 2 to 7
move 7 from 8 to 2
move 4 from 7 to 1
move 14 from 2 to 1
move 10 from 7 to 1
move 1 from 7 to 3
move 1 from 3 to 4
move 1 from 2 to 5
move 25 from 1 to 5
move 1 from 5 to 3
move 4 from 4 to 2
move 13 from 4 to 6
move 4 from 2 to 1
move 3 from 6 to 2
move 9 from 1 to 2
move 22 from 5 to 4
move 1 from 2 to 7
move 8 from 1 to 5
move 1 from 4 to 5
move 15 from 4 to 3
move 11 from 2 to 1
move 1 from 7 to 3
move 2 from 5 to 1
move 13 from 3 to 5
move 10 from 6 to 7
move 1 from 3 to 4
move 1 from 3 to 6
move 1 from 3 to 9
move 1 from 9 to 5
move 1 from 6 to 2
move 6 from 4 to 9
move 1 from 3 to 7
move 1 from 5 to 1
move 3 from 5 to 6
move 1 from 4 to 3
move 12 from 5 to 6
move 1 from 2 to 8
move 4 from 1 to 7
move 1 from 3 to 2
move 1 from 2 to 6
move 9 from 6 to 4
move 1 from 8 to 7
move 3 from 1 to 2
move 2 from 2 to 5
move 5 from 4 to 6
move 1 from 4 to 6
move 6 from 7 to 3
move 6 from 5 to 7
move 12 from 7 to 4
move 1 from 2 to 8
move 6 from 9 to 5
move 1 from 8 to 9
move 1 from 3 to 6
move 4 from 4 to 1
move 1 from 7 to 9
move 4 from 4 to 6
move 2 from 9 to 7
move 7 from 5 to 1
move 3 from 1 to 4
move 4 from 3 to 1
move 10 from 6 to 9
move 1 from 3 to 5
move 8 from 4 to 6
move 2 from 5 to 2
move 4 from 7 to 4
move 1 from 5 to 9
move 5 from 4 to 7
move 1 from 4 to 8
move 2 from 2 to 6
move 1 from 5 to 3
move 4 from 9 to 6
move 11 from 6 to 8
move 1 from 1 to 4
move 1 from 4 to 1
move 1 from 3 to 1
move 10 from 1 to 4
move 3 from 9 to 5
move 1 from 9 to 3
move 2 from 7 to 4
move 3 from 9 to 4
move 3 from 5 to 8
move 1 from 3 to 5
move 15 from 8 to 2
move 8 from 1 to 4
move 2 from 1 to 2
move 10 from 2 to 3
move 1 from 5 to 7
move 3 from 7 to 8
move 10 from 3 to 5
move 4 from 4 to 2
move 7 from 4 to 1
move 2 from 7 to 4
move 1 from 8 to 9
move 5 from 1 to 6
move 13 from 6 to 2
move 2 from 1 to 4
move 15 from 4 to 5
move 1 from 9 to 3
move 1 from 3 to 4
move 2 from 8 to 3
move 20 from 2 to 6
move 3 from 2 to 8
move 2 from 3 to 8
move 9 from 5 to 2
move 6 from 5 to 9
move 2 from 4 to 1
move 8 from 5 to 4
move 2 from 8 to 1
move 5 from 9 to 5
move 3 from 5 to 7
move 1 from 8 to 2
move 2 from 4 to 1
move 14 from 6 to 4
move 2 from 1 to 8
move 5 from 6 to 3
move 3 from 1 to 6
move 5 from 3 to 2
move 1 from 9 to 6
move 8 from 6 to 2
move 2 from 7 to 4
move 1 from 1 to 3
move 2 from 5 to 8
move 5 from 4 to 3
move 2 from 5 to 3
move 1 from 7 to 5
move 4 from 4 to 3
move 2 from 4 to 2
move 1 from 3 to 7
move 5 from 3 to 7
move 1 from 7 to 3
move 3 from 3 to 2
move 1 from 5 to 9
move 2 from 7 to 9
move 1 from 9 to 5
move 1 from 5 to 3
move 10 from 4 to 9
move 3 from 3 to 9
move 27 from 2 to 5
move 3 from 8 to 3
move 2 from 2 to 6
move 4 from 9 to 7
move 5 from 3 to 8
move 5 from 7 to 3
move 25 from 5 to 1
move 3 from 9 to 8
move 1 from 3 to 2
move 1 from 5 to 3
move 2 from 7 to 9
move 10 from 8 to 7
move 1 from 2 to 3
move 13 from 1 to 7
move 3 from 9 to 7
move 3 from 3 to 1
move 1 from 5 to 8
move 2 from 8 to 6
move 4 from 6 to 5
move 4 from 5 to 6
move 1 from 4 to 6
move 23 from 7 to 9
move 2 from 6 to 8
move 28 from 9 to 1
move 1 from 8 to 1
move 3 from 7 to 3
move 1 from 9 to 4
move 3 from 3 to 6
move 3 from 3 to 4
move 6 from 6 to 8
move 12 from 1 to 7
move 9 from 1 to 6
move 3 from 6 to 3
move 2 from 4 to 7
move 4 from 8 to 7
move 1 from 8 to 5
move 1 from 8 to 4
move 8 from 1 to 7
move 1 from 3 to 4
move 1 from 8 to 3
move 3 from 7 to 5
move 9 from 1 to 3
move 3 from 6 to 5
move 3 from 1 to 7
move 4 from 4 to 2
move 3 from 1 to 4
move 4 from 2 to 8
move 1 from 6 to 2
move 3 from 5 to 6
move 4 from 8 to 5
move 9 from 7 to 6
move 12 from 7 to 1
move 5 from 7 to 3
move 1 from 9 to 7
move 1 from 2 to 9
move 1 from 9 to 4
move 7 from 6 to 3
move 5 from 6 to 2
move 1 from 7 to 6
move 3 from 6 to 1
move 2 from 4 to 9
move 7 from 5 to 8
move 2 from 9 to 4
move 1 from 5 to 8
move 4 from 4 to 1
move 11 from 1 to 7
move 8 from 3 to 1
move 8 from 8 to 6
move 3 from 3 to 5
move 5 from 6 to 1
move 2 from 1 to 2
move 6 from 2 to 3
move 2 from 6 to 7
move 3 from 5 to 4
move 7 from 3 to 9
move 5 from 9 to 5
move 3 from 4 to 3
move 4 from 5 to 2
move 2 from 9 to 4
move 6 from 1 to 9
move 1 from 6 to 9
move 7 from 7 to 1
move 1 from 7 to 3
move 2 from 4 to 5
move 1 from 9 to 1
move 4 from 2 to 3
move 2 from 5 to 2
move 9 from 3 to 1
move 3 from 2 to 4
move 28 from 1 to 6
move 2 from 1 to 3
move 17 from 6 to 3
move 2 from 9 to 5
move 2 from 6 to 7
move 1 from 5 to 7
move 1 from 9 to 4
move 5 from 6 to 9
move 14 from 3 to 5
move 15 from 5 to 9
move 1 from 4 to 9
move 1 from 5 to 6
move 1 from 4 to 1
move 11 from 3 to 6
move 1 from 1 to 6
move 12 from 6 to 8
move 4 from 9 to 7
move 20 from 9 to 4
move 18 from 4 to 5
move 6 from 5 to 8
move 12 from 8 to 2
move 2 from 2 to 6
move 1 from 5 to 2
move 4 from 4 to 8
move 5 from 5 to 9
move 4 from 3 to 6
move 1 from 3 to 8
move 7 from 7 to 8
move 10 from 2 to 8
move 1 from 6 to 3
move 10 from 6 to 5
move 10 from 5 to 2
move 2 from 7 to 5
move 9 from 2 to 1
move 27 from 8 to 9
move 2 from 2 to 7
move 9 from 1 to 2
move 1 from 5 to 3
move 9 from 2 to 1
move 1 from 8 to 7
move 2 from 1 to 3
move 19 from 9 to 1
move 5 from 5 to 1
move 3 from 9 to 2
move 2 from 3 to 9
move 1 from 3 to 4
move 5 from 7 to 4
move 1 from 7 to 3
move 17 from 1 to 2
move 1 from 5 to 3
move 9 from 9 to 5
move 2 from 1 to 2
move 1 from 4 to 9
move 2 from 4 to 6
move 1 from 4 to 7
move 6 from 1 to 8`,$1="cvtvbvfbvfbfqfrrtnnmqqmcqqpfplfpphchpcpcfppmwwhhscccjwjnnctcjtjgjbgjjdzjjwzwfffnhhgppjmpmgppppzbzbrzznttfqqhtqqbssrjjffgssnqnsqnsqnnmlmmztmtqmqccqscsshrsrtstrrjwrrswwpnnftfwwwzznsstbbbtzzncnbcnbccwtwctwwjgjcjtccblclgcgjgngwgbggpbbbbbgcczzfsfbbwlwwnqwnwbnwnmmbjjnfnqfqfvvgvqqvcvggpnpssptpnpjjvvpdpqpcqpcqqnhhnqncqclcfcfjcjhjdjqddhndnmmvmfmsmdsdwsdswsnsgsmsrmrjjpzzzzcppczcscsgcczqcqnnpzpbbdqqqqsqlslzljzjdjbjdjvvlhvvnbbjtbbqbdqdggzwgghhdssmttjtttmwtmtjjcpjpjptjpjmpptnntgttjpttljjwtjwwrgrvgrvrmvvrvdrdcdmmvvbpbddfbdbppdccjdjvjpjjgzjzdzfddqcqlccbvbqvqvjqjggqrqdrqrhhwggmvgmgvgrvvzwzddlzlbbdpbdbtbhthnthttjwtwffwvvrccnpcnclcgcrrgdrrgzgmzggzhhftfppnwppqhhmddzhdzzzjqjhqqcgqqmjjwppfrprlrjlrjjlhjlhjjnbnlblbzlbbfjjwfjjdcdndvvbllfmlmfmvmnnlcnncsnslsvlsvlsltslslqsqzssslqlssqrrpdpwdppsfpsprpffchhcvcpvvjpjvjmvvrjrqrzqqqlvvzzggcgrcgcmmvnmmchmmswsvwsvwswnwswdwmwzmmqfqrqtrqqwqlqlmqmsmggpzpjjlvllzplzlbzzbhhglhhwwhfwwpwgwrwlwplppfvflftltffccmcrcgrcgghgmmbrbppwvvghvhphhztzpzzwbbtpppcnpccnvcvbccvfvmffmtmbttdqdrrfnrnffsgstttbhhgmmtffhthllsbllsqsllptpwpvpdpsddsgsrrngnpggwbwwppfqfmqfmfvfzzzldltdtvdvtvtbvtgpvtnvcsdbwjrqwrfzdhwfwnmtrltdhsfzwwfpscrlsffchnfszqdddsztwzcbwdwfnljpfdsqgpnjffqfgsprggfwgvfldvzmnrpnzvfscswnzbljtvshzmcztqqwtzdstsqggqqvvlmspjjcmllcmsndwpllrvlrglphcqjgwzntwqffthrfmfgpcvjvclvdrjrpnwtrlshlnwgbbznpflsfmgvbwmnwjpnqhmdnsmwnmblqzjfzfcslhntnjhbrvvlfbffsbhrtvjltqrqszsrpmdghmhsrqlmrjdsgtsgwggdlqptqrvgmwrpcjrnmmmcdpgjzgghqmshhmddfvfrqwnwvwbvzzpmwzmvvgsqlsgvmtczwnbzrtnzjnpjjghdzsmcgvqpdhltvltbfvgsgzhvqjjnpspngqpvqwvtqrczqzwrclqbnplmvlnvcwdbzlrnwbppvdfzmblnqfpfqlngttrrcjzfjnrnmssdrrvbvhtrfzblzsjbqwbttsshmcmfhrfbfqspvcfmqbwjszmvwqnpszcfhtnqtftvtpvcjrcnlmfnvlpjzspcnmvvshpsdfhtbhgjcmjmtpmtcbwnlgtnvlwlggbnzfrrqljmjrwjtzfmgbllmmjtfhrszfrfpftmpzhzdhfwdbdnwqspjbrlglgdwtfzcrdhwgqltvthbnrqfngjgnddqlcpjflqzvbhmlzsvpvlzdvhspmchrjlzfgnlpwdnszqdqpnrchdrswfwnflslcpfmbfrplsmchbgjhhhlzjlvztpdhslrpmmcthhjwfczjtmbmsvzvsqrvzrcnflqldfnhjzlcsfhgrtqtscnbzqjglgjnqbtprrprrdtqqtlqwdqnmgbglvwtrpnpjqdsmvczbnldvmgmtpmmqbwgjbfsqbjvnjhhlrppptlrjsptpvghbgtvwvsrnggznjsbjpnwpdsqmmjjqjdwshqwzvqgpnlhdldwzmvmdnhrnhpscrbnbdtmfqwlmrlszljpjdqgjpgcdwtqzsbqsndjdslrstjwbbfnjvrjlbrphqspltjzpvsgccfrmqhfhjmlslncpgpflhjlrzqsffrtcgsvzpjmlqjznscgjrjhzfjbbchvgjgvfsrpnzdrstdtsltqldfldvfdjqdwsltcbnnvcgvnjpgdjzsbzgfvgvtmghwfmrmblscfdqlsdgcdbgsphfvvvnffcqwlrvnsrjmvvdrjdljlppsfsrmwwvmsqcgtgtfjhqbqvlsnwdwzhncgprbspjzqnbllwcjnqpfzlhscdtvlldffngwttntsbtlctdfbzjgclgbhhjtlffvtgbdsswczlgmwntrrnnbdtflplfbtqcfrhtgjnrltvzqlcvtdthldqrvjdmlntdjzcncrplgmdbqhlrrfdszrnbrllhgpzzgjnqzrjrtjjntqvdphgvjtbtqfjwvlpprrcvmpjcdmntvtqjvjrhngbtmdtflpqmlmmvjjjpdlcvntlvlgstbblwfwjrbcqjgzvjjzflfhdvgnhpnqprcvmhsrpmgfcgjpdbqpmpvlnmzdngzqcqtdsbbqbdhtgpqmqwtcctsvhwmlhpgzgpwwsqngsrwzghfhzbqcpspfhqbllbvpwgwdnghqnvjtfqtwgvnbfbpcffbwwbfqgqnftpqdtwhmrprpgdlnwrcmdndllwbvlrrjvmwlbgfwgbhtmbqhfvhlhlthbrljwnwcgsdgsbbzgnwzmjfgnfjcqhspjwctntznjptsnbpwtfzmrqwjzrmdthfwdvttrcghbjndfmtswhsmdwwwffmgsvshmlhdbwdscjnvrvqnwttlsmfbssnsscftcrpwfbbplbpmvzmttvbgpnjtqqzcfdfwqdphggwbnhfvssmdjvbvtlrcghltthqrqdbvjnbqpzjcggrbnrswhvdcrmgncsmhsmstmcbwgbfwvzqtdrpjbgljdgcncgcdslhftptnvfhgpsjqqmnsjmqhztnfzqqqhccbnqjlhqcwwbfzgpmbvjszswjlhcqshtqdmwmhpgqgzbwbtchrdwgnvfqcgcmngtddpzfgjrrssdmcnbtpbhfvfbdgzmcbjqtdqrnrdchtrcfpmtnvfczdlnjplwccfmzjwwvdsrcjznrcbczdqwshjgvhjpgdgjvtvmdzncrqgffzhcbwstvltqbrzfbnrrvlntjmzctvnqhdcgvvmmbfplzpwgsdzdtvnwnshnwbwqplbctntslczwhblsnzdcsgltvlfvbtvthvlsmzmfgzhpvrvczdhmcpmgqzbdhbcdbstrrtzgrbhhwwghzlgcdtlcjtjdcwdtqpvpwzrwmhczfsdmwjlgtmzvdbwzdnsztvqzhjpfrqzllgvrsbmhvrlzwtfmpzchftrzlmndpwqgcmhdzmjrjvpbnrcmjvzbzlqngmrzcbdwfcwmlnlqsdgbvmvqcsjtwgvtpmqdtdqfrshmlgnjqdwsrpjcfnfpjzlhslsvppmgprqlpcfztcngmqgrvqvpcszzgtbpcrghmgnvgplctgdljhwjgbzmjrdsccdtrwjrrbttzmpvmzlmqdfwdccfzqztdjmcgrcdwghgmmntdwrclshlgnsmhmltwcczncndtglnqvcvbwlvcgqtzpnqnlllchwjwrlhcdlbjlzvhvtjsttqhvhfqbsqjpfcmpsfshgrrwgprjtfnhsjqqntrjfgjjmjbqwdjlcjjdljpppgvqvgrrwvclbmncmqglhbtjcfrbjmhqgmlpzgljntqvrcggmrgtbrftvhrnjbvzstlnzrqcgncnjhdrnqcnwcrstvdsgnwzjzmqsdtwzzjmfgzpslhqclhtjnrlwwfrqgmhsttfdprhgmphzfdfqntwztltnnfqwgdnnbrlgzmtwqsvhbjjqtcgmghnbchdfgfrdtjnvlgtqdgrfwmgnmpslqmqzdgqztnppbc",u1=`$ cd /
$ ls
dir bqc
dir mwmlf
dir ngn
143562 nrwjb
78449 qqvdcclf
dir qrnm
dir smfzmmhc
116085 tvrms
dir vrdrsj
$ cd bqc
$ ls
5693 qqvdcclf
$ cd ..
$ cd mwmlf
$ ls
dir cmfphpc
dir lqqshq
dir mwmlf
dir rlf
dir smfzmmhc
$ cd cmfphpc
$ ls
235620 tprth.gjn
82743 vrdrsj.fbl
$ cd ..
$ cd lqqshq
$ ls
94188 crswqlvd.nsj
dir dttthls
60078 lbsfsspm
dir lqp
74624 nrwjb
247709 tjhcqw.wrq
267693 tvrms
dir zshrcgfn
$ cd dttthls
$ ls
109072 nrwjb
31512 qqvdcclf
$ cd ..
$ cd lqp
$ ls
237917 nrwjb
45489 vrdrsj.ntw
$ cd ..
$ cd zshrcgfn
$ ls
185533 smfzmmhc.zzd
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
dir bbvhpmsj
dir mwmlf
83589 qqvdcclf
$ cd bbvhpmsj
$ ls
232123 hrvlgmjb.wrv
137190 rlf
21785 tghvbj.mfr
25344 vrdrsj.swp
$ cd ..
$ cd mwmlf
$ ls
dir wnn
$ cd wnn
$ ls
dir thd
$ cd thd
$ ls
36125 lgt
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd rlf
$ ls
dir fps
128272 lggpfj.gnr
146745 lrdq.zgm
dir mwmlf
266383 mwmlf.wnp
dir ncrlvggp
dir qpgmrj
$ cd fps
$ ls
dir rqjt
dir wpqvmn
$ cd rqjt
$ ls
175784 pcdtdblc.znj
185424 wmstvdt.lhn
$ cd ..
$ cd wpqvmn
$ ls
141743 ljslzhjl
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
169015 rlf
$ cd ..
$ cd ncrlvggp
$ ls
81450 fqtrpm.mqr
146399 jtbr
dir nnqgqqj
288302 qqvdcclf
$ cd nnqgqqj
$ ls
dir fvbhh
$ cd fvbhh
$ ls
121112 zmn.fjz
$ cd ..
$ cd ..
$ cd ..
$ cd qpgmrj
$ ls
dir hrvlgmjb
dir pbc
$ cd hrvlgmjb
$ ls
7858 czvpvwz
$ cd ..
$ cd pbc
$ ls
150816 tprth.gjn
$ cd ..
$ cd ..
$ cd ..
$ cd smfzmmhc
$ ls
dir jwvw
184385 spbjrlv.spt
dir trpdgl
201578 zzhz
$ cd jwvw
$ ls
47747 nrwjb
$ cd ..
$ cd trpdgl
$ ls
136682 mwmlf
$ cd ..
$ cd ..
$ cd ..
$ cd ngn
$ ls
dir fqbph
282363 lscdth.lbj
dir mwmlf
273281 qbpmcqs
7547 qdffbp
223960 tprth.gjn
$ cd fqbph
$ ls
dir bgtbmzj
dir lzjf
12361 nrwjb
dir pdsdttz
150218 pfvtwr.pbf
dir rlf
158227 sfhsszcq.tzv
183244 smfzmmhc.drh
$ cd bgtbmzj
$ ls
dir gvqhtfg
dir jmvzv
194008 ldpfs.qhr
dir mtztr
11099 nfqmvqcm.ftd
dir szp
153379 zrtsd.jwg
$ cd gvqhtfg
$ ls
dir ntq
dir rlf
62076 rlf.nlc
$ cd ntq
$ ls
dir wdtzhz
$ cd wdtzhz
$ ls
dir tlqcbp
$ cd tlqcbp
$ ls
102930 smfzmmhc
$ cd ..
$ cd ..
$ cd ..
$ cd rlf
$ ls
185079 tjhcqw.wrq
$ cd ..
$ cd ..
$ cd jmvzv
$ ls
dir hfmtzbhf
61556 jzbvmc
dir scjpjp
237487 sgh
dir smfzmmhc
$ cd hfmtzbhf
$ ls
dir ldt
136126 tvrms
$ cd ldt
$ ls
dir smfzmmhc
dir wrhpzrfm
dir zbcfv
$ cd smfzmmhc
$ ls
86537 tjhcqw.wrq
$ cd ..
$ cd wrhpzrfm
$ ls
263122 smfzmmhc.shv
73772 tvrms
$ cd ..
$ cd zbcfv
$ ls
dir vrdrsj
$ cd vrdrsj
$ ls
220800 zwdbh
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd scjpjp
$ ls
38282 rlf
93306 rlf.blz
$ cd ..
$ cd smfzmmhc
$ ls
dir gqms
dir mwmlf
21587 nrwjb
184621 zvq.lvr
$ cd gqms
$ ls
dir frbs
dir rlf
$ cd frbs
$ ls
dir mpdll
82901 zdmnm.wlc
$ cd mpdll
$ ls
dir mgqd
dir mrljj
$ cd mgqd
$ ls
75558 vrdrsj.zwc
$ cd ..
$ cd mrljj
$ ls
dir qmsgj
128171 qqvdcclf
245942 rlf.hgt
dir zzvbt
$ cd qmsgj
$ ls
7382 mwmlf
$ cd ..
$ cd zzvbt
$ ls
285714 zltjmn
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd rlf
$ ls
43731 gttgwfgf.cpd
dir hvtn
112018 jdhb.ssj
195239 rlf.gvd
200476 spsstb
$ cd hvtn
$ ls
dir zzsfgzc
$ cd zzsfgzc
$ ls
116544 vrdrsj
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
dir hmpvn
dir shlnfcpz
$ cd hmpvn
$ ls
55892 qqvdcclf
$ cd ..
$ cd shlnfcpz
$ ls
144766 fnrhmbbm.rnp
2622 tjhcqw.wrq
219884 tprth.gjn
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd mtztr
$ ls
dir plngmzl
dir qbwzhr
$ cd plngmzl
$ ls
153434 dhjv.pfn
$ cd ..
$ cd qbwzhr
$ ls
26553 mcb.djg
$ cd ..
$ cd ..
$ cd szp
$ ls
37741 qqvdcclf
dir vrdrsj
$ cd vrdrsj
$ ls
dir hznmsclb
13218 mwmlf.vhs
102602 rggt
228549 rlnf.qrt
$ cd hznmsclb
$ ls
17957 mwmlf.lsv
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd lzjf
$ ls
40821 lfgh.jwg
dir rplfgb
$ cd rplfgb
$ ls
301639 zmrpm.pqn
$ cd ..
$ cd ..
$ cd pdsdttz
$ ls
294779 tprth.gjn
$ cd ..
$ cd rlf
$ ls
37853 qst.zgc
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
dir dqvhgnj
dir fvjtnl
dir jfsgp
230725 tjhcqw.wrq
2872 tvrms
dir zszcsbl
$ cd dqvhgnj
$ ls
214328 bph
138045 tjhcqw.wrq
$ cd ..
$ cd fvjtnl
$ ls
62568 sllvfsf
286839 tjhcqw.wrq
241004 zvqrg.bsg
$ cd ..
$ cd jfsgp
$ ls
116677 tprth.gjn
151347 vtbt
$ cd ..
$ cd zszcsbl
$ ls
97786 hrvlgmjb.wzz
$ cd ..
$ cd ..
$ cd ..
$ cd qrnm
$ ls
70534 nrwjb
292701 qqvdcclf
153174 sjqvgh.nvt
$ cd ..
$ cd smfzmmhc
$ ls
dir gjrqmcjl
63451 hrvlgmjb
dir mwmlf
dir ncgjsjj
246754 nrwjb
dir pvnbj
dir sjqwr
dir vrdrsj
dir vwfnglr
$ cd gjrqmcjl
$ ls
283020 gwcrpgc
36180 ltmzzz
dir tpsr
$ cd tpsr
$ ls
51208 nscwcztf.wlh
121548 smfzmmhc
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
263186 mwmlf.fqd
$ cd ..
$ cd ncgjsjj
$ ls
204801 nrwjb
116293 rdrmctwg.nqc
36548 tjhcqw.wrq
$ cd ..
$ cd pvnbj
$ ls
dir cfmn
dir cnhmcjp
231615 ctllrm
dir czmw
dir drfzgwtz
135330 jsm
dir jtjzwjh
dir nfg
279734 qqvdcclf
220762 tvrms
35964 vrdrsj.jqj
$ cd cfmn
$ ls
300636 frn.ccd
dir qmtc
dir sfvd
$ cd qmtc
$ ls
267669 jwvjslwp.vsp
180586 tvrms
$ cd ..
$ cd sfvd
$ ls
169064 cgzmwg.rgr
dir hsz
270729 qgmmc.sqq
dir qpzbffd
92811 shcpdlm.nwz
dir sstdzdf
dir thrzw
dir wscsr
$ cd hsz
$ ls
301584 qqvdcclf
$ cd ..
$ cd qpzbffd
$ ls
264911 mwmlf.rvg
dir rlf
32109 svhwhw.fdp
155713 tjhcqw.wrq
dir vrdrsj
$ cd rlf
$ ls
32357 tvrms
$ cd ..
$ cd vrdrsj
$ ls
93501 nrwjb
$ cd ..
$ cd ..
$ cd sstdzdf
$ ls
241812 mgrvcbjc.rqb
dir mwmlf
273819 nvrssljz
156873 tvrms
$ cd mwmlf
$ ls
133649 wdfvctwp
$ cd ..
$ cd ..
$ cd thrzw
$ ls
67552 smfzmmhc
$ cd ..
$ cd wscsr
$ ls
132663 dnbvw.zwd
dir ffthd
293463 hrvlgmjb.fwh
dir lhjvfdh
194357 nrwjb
dir smj
56668 tprth.gjn
303099 tvrms
dir vrdrsj
$ cd ffthd
$ ls
84952 nrwjb
192566 rlf
dir slbg
78478 srzz
250044 tprth.gjn
97100 tvrms
$ cd slbg
$ ls
203375 nrwjb
39137 qqvdcclf
$ cd ..
$ cd ..
$ cd lhjvfdh
$ ls
1747 rtphln.pgc
163505 tjhcqw.wrq
76891 tprth.gjn
$ cd ..
$ cd smj
$ ls
6853 hhtdhzgn
158303 pmsflvrn.hnh
$ cd ..
$ cd vrdrsj
$ ls
dir jdlc
263568 vrdrsj
dir vvtl
$ cd jdlc
$ ls
12435 hqggp.lrq
292141 ntbcht.zbw
$ cd ..
$ cd vvtl
$ ls
118913 qqvdcclf
291087 tjhcqw.wrq
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd cnhmcjp
$ ls
263233 tjhcqw.wrq
$ cd ..
$ cd czmw
$ ls
dir gdsgw
dir gfd
3390 mwmlf.zss
$ cd gdsgw
$ ls
298839 dbwsmwnb.svt
170672 tprth.gjn
$ cd ..
$ cd gfd
$ ls
193212 tld
$ cd ..
$ cd ..
$ cd drfzgwtz
$ ls
257122 tprth.gjn
$ cd ..
$ cd jtjzwjh
$ ls
dir jhpp
274740 lnrwrpjj
35217 ptzmfsmr.pwc
67549 qpdj.pfc
$ cd jhpp
$ ls
40279 jgstzhw.cbq
$ cd ..
$ cd ..
$ cd nfg
$ ls
126237 mqfl.flt
$ cd ..
$ cd ..
$ cd sjqwr
$ ls
53423 bngqncqn
dir lblv
178935 nrwjb
188826 tprth.gjn
dir vrdrsj
286449 vrdrsj.svn
$ cd lblv
$ ls
dir bptgd
215281 jjvcgb.nwc
dir rlf
300004 tvrms
$ cd bptgd
$ ls
19667 mwmlf
$ cd ..
$ cd rlf
$ ls
dir mwmlf
263985 rbhz.plr
$ cd mwmlf
$ ls
254206 smfzmmhc
$ cd ..
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
dir vrdrsj
$ cd vrdrsj
$ ls
250310 hrvlgmjb.bbf
130543 mwmlf.lbq
$ cd ..
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
dir mwwr
dir rlf
$ cd mwwr
$ ls
dir lhz
$ cd lhz
$ ls
dir ssz
dir vrdrsj
$ cd ssz
$ ls
107472 hcnsgjhj
$ cd ..
$ cd vrdrsj
$ ls
303694 rlf
$ cd ..
$ cd ..
$ cd ..
$ cd rlf
$ ls
299875 nrwjb
$ cd ..
$ cd ..
$ cd vwfnglr
$ ls
dir mtvgvvcr
114118 mzhgbj.zvv
273343 tprth.gjn
28259 wgrp
$ cd mtvgvvcr
$ ls
218927 bvlv.npm
64283 hrf.czg
dir mnmqqqgh
103691 qtb.fnb
dir smfzmmhc
252712 zjlgc.sfg
$ cd mnmqqqgh
$ ls
231583 hrvlgmjb.mtq
$ cd ..
$ cd smfzmmhc
$ ls
dir dzjfd
dir jjslqwn
264128 nrwjb
257359 tvrms
$ cd dzjfd
$ ls
dir smfzmmhc
237116 zzgr
$ cd smfzmmhc
$ ls
230613 qqvdcclf
91615 smfzmmhc
$ cd ..
$ cd ..
$ cd jjslqwn
$ ls
98708 mwmlf.qtq
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
dir bfgbvlcd
131293 fgh.djg
125876 lcwjtdf.sbl
dir pnds
263022 tvrms
$ cd bfgbvlcd
$ ls
276134 vrdrsj
$ cd ..
$ cd pnds
$ ls
dir bffz
dir jwcjpt
dir pvnbz
$ cd bffz
$ ls
194315 dndbj.gww
115061 lspnmhml.fdb
239758 tjhcqw.wrq
124732 wjcbcvfd
$ cd ..
$ cd jwcjpt
$ ls
dir dcmcgc
dir llt
dir rfh
dir scljqqq
127542 tvrms
$ cd dcmcgc
$ ls
dir fhdvgvtz
dir hrvlgmjb
dir rlf
dir smfzmmhc
$ cd fhdvgvtz
$ ls
33684 lcl
dir lrsjg
203352 npvgs.qdw
6985 tvrms
102991 wmnrjw.chn
162852 wrcjmll.rlb
$ cd lrsjg
$ ls
dir jgfpvdc
84338 mwmlf.vdw
147349 nrwjb
dir sblp
dir vrdrsj
$ cd jgfpvdc
$ ls
265563 chlgpdsp.hrv
dir dsc
dir gvrg
dir mwmlf
dir qrqvl
100762 rlf
300872 sjvgwmdg.qhg
164004 tzqmh
300736 zhgmdcl.bfq
$ cd dsc
$ ls
284520 rtt.qps
263890 smfzmmhc
$ cd ..
$ cd gvrg
$ ls
dir hzclphlb
dir vcnlmdp
$ cd hzclphlb
$ ls
295429 mcdjsms.zss
$ cd ..
$ cd vcnlmdp
$ ls
dir wrlhqh
$ cd wrlhqh
$ ls
41526 tmf.ctw
$ cd ..
$ cd ..
$ cd ..
$ cd mwmlf
$ ls
dir cwsrt
dir grqng
$ cd cwsrt
$ ls
dir ztmtjwj
$ cd ztmtjwj
$ ls
17063 svdm
$ cd ..
$ cd ..
$ cd grqng
$ ls
216391 tvrms
$ cd ..
$ cd ..
$ cd qrqvl
$ ls
1835 hrvlgmjb
43155 mwmlf.sng
238089 ngjg.zmc
$ cd ..
$ cd ..
$ cd sblp
$ ls
178768 bgfnqf
$ cd ..
$ cd vrdrsj
$ ls
255854 qrrc.bbc
178991 smfzmmhc
$ cd ..
$ cd ..
$ cd ..
$ cd hrvlgmjb
$ ls
dir fjnp
70585 hrvlgmjb
dir qsrgzrdf
43606 rmjzzgrs
dir vds
dir vrdrsj
35098 wthtcg.wgd
$ cd fjnp
$ ls
19740 qqvdcclf
dir smfzmmhc
$ cd smfzmmhc
$ ls
dir nnbc
$ cd nnbc
$ ls
100360 mwmlf
$ cd ..
$ cd ..
$ cd ..
$ cd qsrgzrdf
$ ls
279143 fgthp.qmg
$ cd ..
$ cd vds
$ ls
247595 gnclhrw.mwt
303125 pcdnbq.zbs
38092 tprth.gjn
dir vrdrsj
$ cd vrdrsj
$ ls
dir tnjg
$ cd tnjg
$ ls
37395 brcbr
$ cd ..
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
94639 tjhcqw.wrq
$ cd ..
$ cd ..
$ cd rlf
$ ls
dir btqjc
108141 dnplntn.mwr
31100 lmfsgd
263849 lpbdq.vdp
109813 smfzmmhc.wsr
dir vrdrsj
$ cd btqjc
$ ls
31933 nwszgpm.qqr
106249 rjqvhccg
16766 vgzqz
$ cd ..
$ cd vrdrsj
$ ls
dir bfv
dir jtnqr
19593 mwmlf
220657 rggqjp.pnt
$ cd bfv
$ ls
48210 tdgd.ppw
232603 tjhcqw.wrq
$ cd ..
$ cd jtnqr
$ ls
dir bct
202702 grstm.ltj
dir mwmlf
258253 tvrms
$ cd bct
$ ls
131860 fwfzsc.pls
42452 thp
$ cd ..
$ cd mwmlf
$ ls
284648 vdjh.dct
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd smfzmmhc
$ ls
dir fvtlvtlq
108335 jdbdb
dir vrdrsj
$ cd fvtlvtlq
$ ls
237419 ctwllbmc
36570 qqvdcclf
dir rlf
92173 smfzmmhc
$ cd rlf
$ ls
89469 dtg.bvl
88361 mqrr
$ cd ..
$ cd ..
$ cd vrdrsj
$ ls
47472 fftpd
53118 qqvdcclf
$ cd ..
$ cd ..
$ cd ..
$ cd llt
$ ls
98255 hnvqtbcn
$ cd ..
$ cd rfh
$ ls
29828 hgwh.tnl
dir rchll
dir smfzmmhc
$ cd rchll
$ ls
240042 rdj.wrv
$ cd ..
$ cd smfzmmhc
$ ls
45192 clnbddrh.lbq
105827 ndzjnttr
140925 nmnr.lct
dir rlf
238998 tprth.gjn
dir vrdrsj
$ cd rlf
$ ls
115973 mnnr.smj
75630 zld.hzv
$ cd ..
$ cd vrdrsj
$ ls
302512 phmvhpvb.fwh
dir tjrpwhc
$ cd tjrpwhc
$ ls
13802 hrvlgmjb
$ cd ..
$ cd ..
$ cd ..
$ cd ..
$ cd scljqqq
$ ls
228515 hrvlgmjb.nhn
246019 mwmlf
9535 mwmlf.nvm
$ cd ..
$ cd ..
$ cd pvnbz
$ ls
dir hrvlgmjb
279877 mwmlf
dir zdqprndl
278221 zwwtflb
$ cd hrvlgmjb
$ ls
dir vggpr
$ cd vggpr
$ ls
270197 cpzj
$ cd ..
$ cd ..
$ cd zdqprndl
$ ls
197398 tprth.gjn`,_1="",a1="",S1="",X1="",T1="",L1="",M1="",D1="",F1="",G1="",Q1="",V1="",P1="",J1="",H1="",N1="",W1="",R1="";var ln=Object.assign({"./solutions/solution-01.js":Gn,"./solutions/solution-02.js":Pn,"./solutions/solution-03.js":Nn,"./solutions/solution-04.js":yn,"./solutions/solution-05.js":xn,"./solutions/solution-06.js":Kn,"./solutions/solution-07.js":o1,"./solutions/solution-08.js":r1,"./solutions/solution-09.js":m1,"./solutions/solution-10.js":Y1,"./solutions/solution-11.js":f1,"./solutions/solution-12.js":l1,"./solutions/solution-13.js":c1,"./solutions/solution-14.js":v1,"./solutions/solution-15.js":s1,"./solutions/solution-16.js":e1,"./solutions/solution-17.js":d1,"./solutions/solution-18.js":A1,"./solutions/solution-19.js":C1,"./solutions/solution-20.js":p1,"./solutions/solution-21.js":B1,"./solutions/solution-22.js":g1,"./solutions/solution-23.js":j1,"./solutions/solution-24.js":b1,"./solutions/solution-25.js":h1}),cn=Object.assign({"./inputs/input-01.txt":w1,"./inputs/input-02.txt":q1,"./inputs/input-03.txt":i1,"./inputs/input-04.txt":z1,"./inputs/input-05.txt":Z1,"./inputs/input-06.txt":$1,"./inputs/input-07.txt":u1,"./inputs/input-08.txt":_1,"./inputs/input-09.txt":a1,"./inputs/input-10.txt":S1,"./inputs/input-11.txt":X1,"./inputs/input-12.txt":T1,"./inputs/input-13.txt":L1,"./inputs/input-14.txt":M1,"./inputs/input-15.txt":D1,"./inputs/input-16.txt":F1,"./inputs/input-17.txt":G1,"./inputs/input-18.txt":Q1,"./inputs/input-19.txt":V1,"./inputs/input-20.txt":P1,"./inputs/input-21.txt":J1,"./inputs/input-22.txt":H1,"./inputs/input-23.txt":N1,"./inputs/input-24.txt":W1,"./inputs/input-25.txt":R1});function y1(n,t,o){this.day=n||"0",this.input=t||"",this.part1=o.part1||null,this.part2=o.part2||null}function O1(){var n={},t={};Object.keys(cn).forEach(r=>{var Y=/input-(..)/.exec(r)[1];n[Y]=cn[r]||""}),Object.keys(ln).forEach(r=>{var Y=/solution-(..)/.exec(r)[1];t[Y]=ln[r]||null});var o={},m=Object.keys(n).sort();return m.forEach(r=>{o[r]=new y1(r,n[r],t[r])}),o}function vn(n,t,o){const m=n.slice();return m[18]=t[o],m}function sn(n){let t,o=n[18]+"",m,r,Y;function f(){return n[8](n[18])}return{c(){t=B("span"),m=R(o),e(t,"class","button svelte-1r19pmk"),mn(t,"current",n[18]===n[2])},m(l,s){An(l,t,s),v(t,m),r||(Y=[G(t,"keydown",x1),G(t,"click",f)],r=!0)},p(l,s){n=l,s&2&&o!==(o=n[18]+"")&&k(m,o),s&6&&mn(t,"current",n[18]===n[2])},d(l){l&&K(t),r=!1,D(Y)}}}function k1(n){let t,o,m,r,Y,f,l,s,c,C,g,w,q,z,h,P,_,X,J,T,d,a,j,S,Z,H,$,y,tn,L=n[1],b=[];for(let A=0;A<L.length;A+=1)b[A]=sn(vn(n,L,A));return{c(){t=B("div"),o=B("h2"),o.textContent="Advent 2022",m=i(),r=B("div"),Y=B("div"),Y.innerHTML='<h4 class="svelte-1r19pmk">Days:</h4>',f=i(),l=B("div");for(let A=0;A<b.length;A+=1)b[A].c();s=i(),c=B("div"),C=B("h4"),C.textContent="Output 1:",g=i(),w=B("span"),q=R(n[5]),z=i(),h=B("textarea"),P=i(),_=B("div"),X=B("h4"),X.textContent="Output 2:",J=i(),T=B("span"),d=R(n[6]),a=i(),j=B("textarea"),S=i(),Z=B("div"),Z.innerHTML='<h4 class="svelte-1r19pmk">Input:</h4>',H=i(),$=B("textarea"),e(Y,"class","label svelte-1r19pmk"),e(l,"class","day-list"),e(C,"class","svelte-1r19pmk"),e(w,"class","time svelte-1r19pmk"),e(c,"class","label svelte-1r19pmk"),e(h,"name","output1"),e(h,"id","output1"),e(h,"rows","1"),e(h,"class","svelte-1r19pmk"),e(X,"class","svelte-1r19pmk"),e(T,"class","time svelte-1r19pmk"),e(_,"class","label svelte-1r19pmk"),e(j,"name","output2"),e(j,"id","output2"),e(j,"rows","1"),e(j,"class","svelte-1r19pmk"),e(Z,"class","label svelte-1r19pmk"),zn(Z,"align-self","flex-start"),e($,"name","input"),e($,"id","input"),e($,"rows","8"),e($,"class","svelte-1r19pmk"),e(r,"class","layout svelte-1r19pmk"),e(t,"class","outer svelte-1r19pmk")},m(A,u){An(A,t,u),v(t,o),v(t,m),v(t,r),v(r,Y),v(r,f),v(r,l);for(let p=0;p<b.length;p+=1)b[p].m(l,null);v(r,s),v(r,c),v(c,C),v(c,g),v(c,w),v(w,q),v(r,z),v(r,h),M(h,n[3]),v(r,P),v(r,_),v(_,X),v(_,J),v(_,T),v(T,d),v(r,a),v(r,j),M(j,n[4]),v(r,S),v(r,Z),v(r,H),v(r,$),M($,n[0]),y||(tn=[G(h,"input",n[9]),G(j,"input",n[10]),G($,"input",n[11])],y=!0)},p(A,[u]){if(u&134){L=A[1];let p;for(p=0;p<L.length;p+=1){const on=vn(A,L,p);b[p]?b[p].p(on,u):(b[p]=sn(on),b[p].c(),b[p].m(l,null))}for(;p<b.length;p+=1)b[p].d(1);b.length=L.length}u&32&&k(q,A[5]),u&8&&M(h,A[3]),u&64&&k(d,A[6]),u&16&&M(j,A[4]),u&1&&M($,A[0])},i:V,o:V,d(A){A&&K(t),wn(b,A),y=!1,D(tn)}}}const x1=()=>{};function E1(n,t,o){var m=[],r="xx",Y="",f="",l="",s="1ms",c="1ms",C=O1(),g=()=>Object.keys(C).filter(d=>!!C[d].part1).sort();m=g();function w(d=1){if(!q[d]){var a=C[r]||{},j=d===1?a.part1:a.part2;!j||(q[d]=!0,setTimeout(()=>{var S=performance.now(),Z="(error)";try{Z=j(l)}catch(H){Z=String(H)}P(d,Z,performance.now()-S),q[d]=!1},1))}}var q=[!1,!1,!1];function z(d=""){d&&o(2,r=d),o(0,l=C[d].input)}function h(d){w(1),w(2)}function P(d,a,j){var S=`(${Math.round(j)}ms)`;d===1&&o(3,Y=a),d===1&&o(5,s=S),d===2&&o(4,f=a),d===2&&o(6,c=S)}setTimeout(()=>{z(m[m.length-1]),h()},100);const _=d=>z(d);function X(){Y=this.value,o(3,Y)}function J(){f=this.value,o(4,f)}function T(){l=this.value,o(0,l)}return n.$$.update=()=>{n.$$.dirty&1&&h()},[l,m,r,Y,f,s,c,z,_,X,J,T]}class I1 extends Mn{constructor(t){super(),Ln(this,t,E1,k1,bn,{})}}new I1({target:document.querySelector(".app")});