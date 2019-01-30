       //Global setting
        Config.maxThreadDepth = 5;//How threaded level that you want
        Display_Emo = true;//Display emoticon or not? set "false" to no display
        Replace_Youtube_Link = true;//Auto replace youtube link to iframe embedded, choose "false" to disable
        Replace_Image_Link = true;//Auto replace an image link  choose "false" to disable.
                                Replace_Force_Tag = true;//Auto replace an virtual tag example: [pre] to <pre>, and [/pre] </pre>, If user input wrong , your layout will be gone. Then becare ful when enable this trap
        Replace_Image_Ext = ['JPG', 'GIF', 'PNG', 'BMP'];//(support: jpg, gif, png, bmp),only effect when Replace_Image_Link=true
        
        //Config emoticons declare
Emo_List = [
':)'  	,'https://lh3.googleusercontent.com/-cQugl5FMRuM/V1U_XbfQigI/AAAAAAAAEAU/_5Q9Hv4xAGo7Z_TUaGMyoch8vEPO1KnYgCLcB/h120/1.png',
':('  	,'https://lh3.googleusercontent.com/-nQpusekLOCY/V1U_XmFH4LI/AAAAAAAAEAY/TXKngRHW9go5Qrh9wkZR5QFCAEPPvVeeACLcB/h120/2.png',
'hihi'  ,'https://lh3.googleusercontent.com/-RqDpqWecyMw/V1U_j-B12EI/AAAAAAAAECc/s7jdJHYiDQogwTJGmkwO7H4m2JR5qvB6ACLcB/h120/3.png',
':-)'  	,'https://lh3.googleusercontent.com/-LWEIDBVvX1c/V1U_lnGQezI/AAAAAAAAEC8/rjH9OARs2xEp48_v9Q4KaaBvwo6YMZ-ggCLcB/h120/4.png',
':D'  	,'https://lh3.googleusercontent.com/-XxQdOt_KU0Q/V1U_mKKhA8I/AAAAAAAAEDA/bvjgNnnHctg9ueVNu5NFxQ18wQh-hqykACLcB/h120/5.png',
'=D'  	,'https://lh3.googleusercontent.com/-ecwUs8Iv7cE/V1U_maDI_uI/AAAAAAAAEDE/3VBplucPP9g3HRA-zyr_fwWPwlXpC9z9ACLcB/h120/6.png',
':-d'  	,'https://lh3.googleusercontent.com/-cPixj9X9VU4/V1U_mRajeVI/AAAAAAAAEDI/rLjaySYljNY7ldS5KBJYinqcz5JsQwLKACLcB/h120/7.png',
';('  	,'https://lh3.googleusercontent.com/-QK49_cxX7Pg/V1U_m0Plu0I/AAAAAAAAEDQ/QgU1OQfknsgiV1o9rHPZHByL2eeVNxCTgCLcB/h120/8.png',
';-('  	,'https://lh3.googleusercontent.com/-OIvn-XD877c/V1U_m0TggsI/AAAAAAAAEDU/dfIUcK-mvzwcuBYgE93WdXp8nUiaax-kwCLcB/h120/9.png',
'@-)'   ,'https://lh3.googleusercontent.com/-5-xZ_iOFEWY/V1U_fgPr1qI/AAAAAAAAEAk/Fzil_Zga404bKRMUWBJcrYCdZG9WMoqwQCLcB/h120/10.png',
':P'  	,'https://lh3.googleusercontent.com/-surwmy1xv7s/V1U_flVlhoI/AAAAAAAAEAs/UumewMQHQvQ0fF259J1pZPksuGkjt77UwCLcB/h120/11.png',
':o'	,'https://lh3.googleusercontent.com/-TbaqYWjix1Q/V1U_frVlWjI/AAAAAAAAEAo/blK4C7ldC6Me0rdC9yeC3UAs8L-K-oKSACLcB/h120/12.png',     
'-_-'   ,'https://lh3.googleusercontent.com/-MXeJVgDtvm8/V1U_gT-pwFI/AAAAAAAAEA4/VHEw8D0J-igAMmlHQEo8-H0LofhPblsyACLcB/h120/13.png',     
'(o)'	,'https://lh3.googleusercontent.com/-Qh8qpbpfn5w/V1U_gd8Y37I/AAAAAAAAEA0/jrmxtwDbWkAo6OMc1dp81LJ_4rxq6QgEACLcB/h120/14.png',     
'[-('	,'https://lh3.googleusercontent.com/-ydJg3pGdAu4/V1U_glYAGYI/AAAAAAAAEA8/9Bmt6TkY6qAev2PW-upGFKyfTM_neZ33ACLcB/h120/15.png',     
':-?'	,'https://lh3.googleusercontent.com/-zvAWzR1cFqg/V1U_gwtpBEI/AAAAAAAAEBA/UwYwxwcPyRolYybeo2HM432aDEmoS7WKgCLcB/h120/16.png', 
'(p)'	,'https://lh3.googleusercontent.com/-P7z88ESwPbA/V1U_hOh1WhI/AAAAAAAAEBI/dIDLP1WItxQSmbJhxhpx0XmJ_HyzojQ7wCLcB/h120/17.png', 
':-s'	,'https://lh3.googleusercontent.com/-TPpiEOnXnIY/V1U_hPHCZ0I/AAAAAAAAEBM/bdDzJnYqQlIjRTVaGpq31n95sZmbRKRIQCLcB/h120/18.png',
'(m)'	,'https://lh3.googleusercontent.com/-6FrkT1JkhoI/V1U_hiPQnGI/AAAAAAAAEBY/BSr_6-K4NlwX1xfLljfIbFgx6ly7rJOvwCLcB/h120/19.png',
'8-)'	,'https://lh3.googleusercontent.com/-7C1sLx9TYkg/V1U_hty1WFI/AAAAAAAAEBg/Hs27CyEGkLEWoT3N8wCBWo22PE5VuPwZQCLcB/h120/20.png',
':-t'	,'https://lh3.googleusercontent.com/-_FUqFhidqMA/V1U_h6O-u1I/AAAAAAAAEBc/57ERp1X4nYcIpGHJwdLCLpJidR-CqURGACLcB/h120/21.png',
':-b'	,'https://lh3.googleusercontent.com/-mvLRhY4f4Hg/V1U_iQ6ZUiI/AAAAAAAAEBo/sy2V-sOyFoQylKRQuZHxymrzTibYlNoLQCLcB/h120/22.png',
'b-('	,'https://lh3.googleusercontent.com/-xG1jATeYafQ/V1U_iY3K2rI/AAAAAAAAEBw/9siA8z5H7e0jv28K2d7Z3DpOn1Ioks9-gCLcB/h120/23.png',
':-#'	,'https://lh3.googleusercontent.com/-HICGf3jYH1Q/V1U_iTpgnOI/AAAAAAAAEBs/OTQXucr4SwQtYQ43-FJSQUA70V-HRcnkgCLcB/h120/24.png',
'=p~'	,'https://lh3.googleusercontent.com/-rFE8c9kChSA/V1U_jAuFzwI/AAAAAAAAEB8/Uei-eeRYucsaX_b25oSUFSjeOr6AbK1wgCLcB/h120/25.png',
'$-)'	,'https://lh3.googleusercontent.com/-Pzi_NyZB0CM/V1U_jCqzB-I/AAAAAAAAECA/86MgOeR0kGoylHserWnLU4-wEpro2oGmgCLcB/h120/26.png',
'(y)'	,'https://lh3.googleusercontent.com/-DOR5NAJ7fag/V1U_jLkDwhI/AAAAAAAAECE/elfZGm0x7FoChkEsbK_UMuxvyO2dx2gpwCLcB/h120/27.png',
'(f)'	,'https://lh3.googleusercontent.com/-JJCoISGDY-Q/V1U_j9Be1SI/AAAAAAAAECY/KHHRo2K5pPsne4BL4i-zsuM5CFjNGTyCgCLcB/h120/28.png',
'x-)'	,'https://lh3.googleusercontent.com/-AvfZd1NTFfw/V1U_j0YjR7I/AAAAAAAAECU/Fm1730hyNxAHjX7U85ht6IpHoKQ6kZOpwCLcB/h120/29.png',
'(k)'	,'https://lh3.googleusercontent.com/-Sf533Lx2XDo/V1U_khMZ9eI/AAAAAAAAECg/WOgTOgQB3D4RSYHCj9hfLrlOURjA3XEawCLcB/h120/30.png',
'(h)'	,'https://lh3.googleusercontent.com/--Rzg7PE7FYQ/V1U_kpnrH0I/AAAAAAAAECo/XrBlEvaRaawUxgC-i_UC0uQf_0EEGwlfgCLcB/h120/31.png',
'(c)'	,'https://lh3.googleusercontent.com/-q3xJUc8AM8Q/V1U_kniub3I/AAAAAAAAECk/qcB2jKeUbIAT0JxcC94SnPGcPMrUzrIMQCLcB/h120/32.png',
'cheer'	,'https://lh3.googleusercontent.com/-Di2zHgE4USM/V1U_lBsZvUI/AAAAAAAAEC4/1jGglPj2FhIuP2ugYy173q9evtzd-NWdACLcB/h120/33.png',
'(li)'	,'https://lh3.googleusercontent.com/-tg98vYaNbAM/V1U_lK3-GEI/AAAAAAAAECw/GSik9JCoRjwX5SRbCeYtkOOjguRN_j6lgCLcB/h120/34.png',
'(pl)'	,'https://lh3.googleusercontent.com/-xyfPNlEkU8s/V1U_lWd8aMI/AAAAAAAAEC0/ZSjoYA3rTY4DhfflmKYRm__fz6UejeePwCLcB/h120/35.png',
];
        
                               
                                //Config Force tag list, define all in lower case
                                Force_Tag = [
                                    '[pre]','<pre>',
                                    '[/pre]','</pre>',
                                    '<pre class="brush: plain; title: ; notranslate" title="">','&lt;code&gt;',
                                    '</pre>','</code>'
                                ];
      
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 q=\'.W\';3 1a=$(\'#N-Y\').B(\'y\');u 1w(H){3 1h=\' \\n\\r\\t\\f\\2p\\1S\\1T\\1U\\24\\25\\26\\27\\2e\\2h\\2k\\2m\\2n\\2u\\2y\\2z\\2A\\2F\\1L\\1N\\1O\\1P\\1Q\';G(3 i=0;i<H.5;i++){b(1h.g(H.1V(i))!=-1){H=H.d(0,i);11}}C H}$(\'#28 .1B p\').k(u(D,7){b(2r){3 m=\'1g://13.Z.X/1t?v=\';3 8=7.g(m);F(8!=-1){1H=7.d(8);K=1w(1H);3 1c=K.g(\'&\');3 T=\'\';b(1c==-1){T=K.d(m.5)}1e{T=K.d(m.5,1c)}3 1j=\'<1k I="1W" y="1g://13.Z.X/1X/\'+T+\'?1Y=1" 20="0" 21></1k>\';7=7.d(0,8)+1j+7.d(8+K.5);8=7.g(m);b(8==-1){m=\'22://13.Z.X/1t?v=\';8=7.g(m)}}}b(23){3 1d=\'\';3 x=7;G(3 i=0;i<1z.5;i++){3 m=\'.\'+1z[i];3 o=x.E();3 8=o.g(m);F(8!=-1){l=x.d(0,8+m.5);o=l.E();3 w=\'2j://\';3 z=o.g(w);3 L=\'\';F(z!=-1){L=w.R();l=l.d(z+w.5);o=l.E();z=o.g(w)}w=\'1K://\';o=l.E();z=o.g(w);F(z!=-1){L=w.R();l=l.d(z+w.5);o=l.E();z=o.g(w)}b(L==\'\'||l.5<6){11}l=L+l;1d+=x.d(0,8+m.5-l.5)+\'<S y="\'+l+\'" I="2s"/>\';x=x.d(8+m.5);o=x.E();8=o.g(m)}}7=1d+x}b(1m){3 5=A.5;b(5%2==1){5--}G(3 i=0;i<5;i+=2){3 V=\'<S y="\'+A[i+1]+\'" I="1x"/>\';8=7.g(A[i]);F(8!=-1){7=7.d(0,8)+V+7.d(8+A[i].5);8=7.g(A[i])}}}b(2G){3 5=U.5;b(5%2==1){5--}G(3 i=0;i<5;i+=2){F(1){3 x=7.R();8=x.g(U[i]);b(8!=-1){7=7.d(0,8)+U[i+1]+7.d(8+U[i].5)}1e{11}}}}C 7});$(\'.1M\').k(u(D,7){b(1m){3 5=A.5;b(5%2==1){5--}3 15=\'\';G(3 i=0;i<5;i+=2){3 1C=\'<1F>\'+A[i]+\'</1F>\';3 V=\'<S y="\'+A[i+1]+\'" I="1x"/>\';15+=\'<M I="1R">\'+V+1C+\'</M>\'}C 15}});$(\'.1f .1B p\').k(u(i,h){10=h.R();D=10.g(\'@<a 12="#c\');b(D!=-1){14=10.g(\'</a>\',D);b(14!=-1){h=h.d(0,D)+h.d(14+4)}}C h});u 1l(j){r=j.g(\'c\');b(r!=-1)j=j.d(r+1);C j}u 1n(j){j=\'&1Z=\'+j+\'#%1o\';1p=1a.1q(/#%1o/,j);C 1p}u 1r(){k=$(q).k();$(q).k(\'\');q=\'.W\';$(q).k(k);$(\'#N-Y\').B(\'y\',1a)}u 1s(e){j=$(e).B(\'16\');j=1l(j);k=$(q).k();b(q==\'.W\'){1u=\'<a 12="#1v" 29="1r()">\'+2a.2b+\'</a><a 2c="1v"/>\';$(q).k(1u)}1e{$(q).k(\'\')}q=\'#2d\'+j;$(q).k(k);$(\'#N-Y\').B(\'y\',1n(j))}17=2f.2g.12;18=\'#N-2i\';19=17.g(18);b(19!=-1){1y=17.d(19+18.5);1s(\'#2l\'+1y)}G(3 i=0;i<O.5;i++){b(\'1A\'2o O[i]){3 j=O[i].1A;3 1b=2q($(\'#c\'+j+\':P\').B(\'1D-1E\'));$(\'#c\'+j+\' .2t:P\').k(u(D,7){3 J=O[i].16;b(1b>=2v.2w){$(\'#c\'+J+\':P .2x\').1G()}3 Q=$(\'#c\'+J+\':P\').k();Q=\'<M I="1f" 16="c\'+J+\'" 1D-1E="\'+(1b+1)+\'">\'+Q+\'</M>\';$(\'#c\'+J).1G();C(7+Q)})}}3 1I=$("#2B");1I.2C(\'.2D S\').2E(u(){3 1J=$(1i).B(\'y\');$(1i).2H().B(\'y\',1J.1q(/\\/s[0-9]+(\\-c)?\\//,"/2I-c/"))});',62,169,'|||var||length||oldhtml|check_index|||if||substring|||indexOf|||par_id|html|img_src|search_key||upper_html||Cur_Cform_Hdr||||function||http_search|temp_html|src|find_http|Emo_List|attr|return|index|toUpperCase|while|for|str|class|child_id|yt_link|save_http|div|comment|Items|first|child_html|toLowerCase|img|yt_code|Force_Tag|img_html|comment_form|com|editor|youtube|temp|break|href|www|index_tail|newhtml|id|cur_url|search_formid|search_index|Cur_Cform_Url|par_level|yt_code_index|save_html|else|comment_wrap|http|whitespace|this|yt_video|iframe|Valid_Par_Id|Display_Emo|Cform_Ins_ParID|7B|n_cform_url|replace|Reset_Comment_Form|Display_Reply_Form|watch|reset_html|origin_cform|trim|comment_emo|ret_id|Replace_Image_Ext|parentId|comment_body|img_code|data|level|span|remove|ht|avatar|ava|HTTPS|u200a|google_emo|u200b|u2028|u2029|u3000|item|x5d|x7c|x7d|charAt|comment_youtube|embed|autohide|parentID|frameborder|allowfullscreen|https|Replace_Image_Link|x3c|x3e|x0b|xa0|comment_block|onclick|Msgs|addComment|name|r_f_c|u2000|window|location|u2001|form_|HTTP|u2002|rc|u2003|u2004|in|x5b|parseInt|Replace_Youtube_Link|comment_img|comment_child|u2005|Config|maxThreadDepth|comment_reply|u2006|u2007|u2008|comments|find|comment_avatar|each|u2009|Replace_Force_Tag|show|s45'.split('|'),0,{}))