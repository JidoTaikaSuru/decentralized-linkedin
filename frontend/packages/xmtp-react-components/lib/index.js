import { ChevronLeftIcon, InformationCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { forwardRef, useCallback, useRef, useImperativeHandle, useState, useLayoutEffect, useMemo, Fragment } from 'react';
import Ie from 'react-18-blockies';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { format, isSameDay, isBefore, formatDistanceToNowStrict, isAfter } from 'date-fns';
import { useSendMessage, ContentTypeId, getReadReceipt, getAttachment, ContentTypeText, useReply, useClient, useReactions, useAttachment } from '@xmtp/react-sdk';
import { ContentTypeReply } from '@xmtp/content-type-reply';
import { ContentTypeAttachment, ContentTypeRemoteAttachment } from '@xmtp/content-type-remote-attachment';
import { ContentTypeReaction } from '@xmtp/content-type-reaction';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

var L={loading:"_loading_652o7_6 pulse",avatar:"_avatar_652o7_14",blockies:"_blockies_652o7_21"};var u=({url:e,isLoading:t,address:o})=>t?jsx("div",{className:L.loading}):e?jsx("img",{className:L.avatar,src:e,alt:o}):o?jsx(Ie,{"data-testid":"avatar",seed:o||"",scale:5,size:8,className:L.blockies}):jsx("div",{className:L.avatar});var b={wrapper:"_wrapper_ng5ay_1 pulse",element:"_element_ng5ay_6",element1Line:"_element1Line_ng5ay_11",element2Lines:"_element2Lines_ng5ay_16"};var P=({lines:e=1})=>jsx("div",{role:"status",className:b.wrapper,children:e===1?jsx("div",{className:`${b.element} ${b.element1Line}`}):jsxs("div",{className:b.element2Lines,children:[jsx("div",{className:b.element}),jsx("div",{className:b.element})]})});var c={wrapper:"_wrapper_82p7z_6",resolved:"_resolved_82p7z_15",element:"_element_82p7z_20",label:"_label_82p7z_26 text-sm",control:"_control_82p7z_32",input:"_input_82p7z_40 text-md text-sm",resolvedAddress:"_resolvedAddress_82p7z_54",displayAddress:"_displayAddress_82p7z_62",walletAddress:"_walletAddress_82p7z_67",subtext:"_subtext_82p7z_73",error:"_error_82p7z_80",leftIcon:"_leftIcon_82p7z_90"};var se=forwardRef(({ariaLabel:e,resolvedAddress:t,subtext:o,avatarUrlProps:r,onChange:a,isError:n,isLoading:s,label:p,onLeftIconClick:i,onTooltipClick:d,value:h},m)=>{let H=useCallback(A=>{a?.(A.target.value);},[a]),K=!!t?.displayAddress;return jsxs("div",{className:`${c.wrapper} ${K?c.resolved:""}`,children:[i&&jsx("div",{className:c.leftIcon,children:jsx(ChevronLeftIcon,{onClick:i,width:24})}),jsxs("div",{className:c.element,children:[jsx("div",{className:c.label,children:p}),jsx(u,{...r}),jsxs("div",{className:c.control,children:[s?jsx(P,{lines:1}):t?.displayAddress?jsxs("div",{className:c.resolvedAddress,children:[jsx("span",{className:c.displayAddress,"data-testid":"recipient-wallet-address",children:t.displayAddress}),t.walletAddress&&jsx("span",{className:c.walletAddress,children:t.walletAddress})]}):jsx("input",{"data-testid":"message-to-input",tabIndex:0,className:c.input,id:"address",type:"text",spellCheck:"false",autoComplete:"false",autoCorrect:"false",autoCapitalize:"off",onChange:H,value:h,"aria-label":e,ref:m}),jsx("div",{className:`${c.subtext} ${n?c.error:""}`,"data-testid":"message-to-subtext",children:o})]})]}),d&&jsx(InformationCircleIcon,{onClick:d,height:"24"})]})});se.displayName="AddressInput";var U={loading:"_loading_1s609_6",empty:"_empty_1s609_13",wrapper:"_wrapper_1s609_18"};var g={wrapper:"_wrapper_9fip8_1",selected:"_selected_9fip8_10",loading:"_loading_9fip8_14",element:"_element_9fip8_18",domain:"_domain_9fip8_26 text-sm",address:"_address_9fip8_35 text-md",message:"_message_9fip8_44 text-md",time:"_time_9fip8_56 text-xs"};var j={wrapper:"_wrapper_2nuo1_1 pulse",element:"_element_2nuo1_7"};var le=()=>jsx("div",{role:"status",className:j.wrapper,children:jsx("div",{className:j.element})});var Fe=()=>jsx("div",{children:"No conversations!"}),W=({conversations:e=[],isLoading:t,renderEmpty:o=jsx(Fe,{})})=>t&&!e.length?jsxs("div",{className:g.wrapper,children:[jsx(u,{isLoading:!0}),jsx("div",{className:g.element,children:jsx(P,{lines:2})}),jsx(le,{})]}):!e.length&&!t?jsx("div",{className:U.empty,children:o}):jsx("div",{className:U.wrapper,"data-testid":"conversations-list-panel",children:e});var O={wrapper:"_wrapper_gcqk3_1",date:"_date_gcqk3_16"};var V=({date:e})=>jsx("div",{className:O.wrapper,children:jsx("div",{className:O.date,title:e.toDateString(),children:format(e,"PPP")})});var l={wrapper:"_wrapper_igutw_1 pulse",section:"_section_igutw_5",sectionRight:"_sectionRight_igutw_11",element:"_element_igutw_16",elementSmall:"_elementSmall_igutw_22",elementMedium:"_elementMedium_igutw_26",elementLarge:"_elementLarge_igutw_30",elementLast:"_elementLast_igutw_34"};var G=({incoming:e=!0})=>jsx("div",{role:"status",className:l.wrapper,children:e?jsxs("div",{className:l.section,children:[jsx("div",{className:`${l.element} ${l.elementSmall}`}),jsx("div",{className:`${l.element} ${l.elementLarge}`}),jsx("div",{className:`${l.element} ${l.elementMedium}`}),jsx("div",{className:`${l.element} ${l.elementLast}`})]}):jsxs("div",{className:`${l.section} ${l.sectionRight}`,children:[jsx("div",{className:`${l.element} ${l.elementSmall}`}),jsx("div",{className:`${l.element} ${l.elementLarge}`}),jsx("div",{className:`${l.element} ${l.elementMedium}`}),jsx("div",{className:`${l.element} ${l.elementLast}`})]})});var C={wrapper:"_wrapper_hnmk8_1",left:"_left_hnmk8_11",right:"_right_hnmk8_15",content:"_content_hnmk8_19",time:"_time_hnmk8_27",readReceipt:"_readReceipt_hnmk8_36",reactions:"_reactions_hnmk8_40"};var ce={attachment:"_attachment_m6zqf_1"};var X=new WeakMap,Ke=e=>(X.get(e.data)||X.set(e.data,URL.createObjectURL(new Blob([Buffer.from(e.data)],{type:e.mimeType}))),X.get(e.data)),_e=({message:e})=>{let{attachment:t,status:o}=useAttachment(e);if(o==="error")return "Unable to load attachment";if(o==="loading"||!t)return "Loading...";let r=Ke(t);return t.mimeType.startsWith("image/")?jsx("div",{className:ce.attachment,children:jsx("img",{src:r,alt:""})}):t.mimeType.startsWith("audio/")?jsx("audio",{controls:!0,src:r,children:jsx("a",{href:r,children:"Download instead"})}):t.mimeType.startsWith("video/")?jsxs("video",{controls:!0,autoPlay:!0,children:[jsx("source",{src:r,type:"video/mp4"}),"Video messages not supported."]}):jsx("div",{children:jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:t.filename})})};var $={content:"_content_9xkgj_1",left:"_left_9xkgj_10",right:"_right_9xkgj_15",original:"_original_9xkgj_21"};var N=({message:e,isIncoming:t,isRepliedTo:o})=>{let r=ContentTypeId.fromString(e.contentType),a;return r.sameAs(ContentTypeText)&&typeof e.content=="string"&&(a=typeof e.content=="string"?e.content:void 0),(r.sameAs(ContentTypeAttachment)||r.sameAs(ContentTypeRemoteAttachment))&&(a=jsx(_e,{message:e})),jsx("div",{className:`${$.content} ${$[t?"left":"right"]} ${o?$.original:""}`,"data-testid":"message-tile-text",children:a??e.contentFallback??"This content is not supported by this client"})};var fe=({message:e,isIncoming:t})=>{let{originalMessage:o}=useReply(e),r=e.content,a={...e,content:r.content,contentType:new ContentTypeId(r.contentType).toString()};return jsxs(Fragment$1,{children:[jsx("div",{children:o?jsx(N,{message:o,isIncoming:t,isRepliedTo:!0}):"Loading original message..."}),jsx("div",{children:jsx(N,{message:a,isIncoming:t})})]})};var D={wrapper:"_wrapper_l3px9_1",option:"_option_l3px9_11"};var tt=["\u{1F44D}","\u{1F44E}","\u2764\uFE0F"],Q=({conversation:e,message:t})=>{let{sendMessage:o}=useSendMessage(),r=useCallback(a=>{o(e,{content:a,schema:"unicode",reference:t.xmtpID,action:"added"},ContentTypeReaction);},[e,t.xmtpID,o]);return jsx("div",{className:D.wrapper,children:tt.map(a=>jsx("button",{type:"button",className:D.option,onClick:()=>r(a),children:jsx("span",{className:D.emoji,children:a})},a))})};var k={wrapper:"_wrapper_1i67j_1",option:"_option_1i67j_8",count:"_count_1i67j_23",active:"_active_1i67j_28"};var st=["\u{1F44D}","\u{1F44E}","\u2764\uFE0F"],he=({conversation:e,message:t})=>{let{client:o}=useClient(),{sendMessage:r}=useSendMessage(),a=useReactions(t),n=useMemo(()=>a.filter(i=>i.schema==="unicode").reduce((i,d)=>{let h=(i?.[d.content]?.count??0)+1,m=i?.[d.content]?.senderAddresses??[];return {...i,[d.content]:{count:h,senderAddresses:[...m,d.senderAddress]}}},{}),[a]),s=useCallback(i=>n[i]?.count??0,[n]),p=useCallback(i=>{let d=n[i].senderAddresses.includes(o?.address??"");r(e,{content:i,schema:"unicode",reference:t.xmtpID,action:d?"removed":"added"},ContentTypeReaction);},[o?.address,e,n,t.xmtpID,r]);return a.length>0&&jsx("div",{className:k.wrapper,children:st.map(i=>{let d=s(i);return d>0?jsxs("button",{type:"button",className:`${k.option} ${k.active}`,onClick:()=>p(i),children:[jsx("span",{className:k.emoji,children:i}),jsx("span",{className:k.count,children:d})]},i):null})})};var Z=({conversation:e,message:t,isIncoming:o,isRead:r})=>{let a=ContentTypeId.fromString(t.contentType);return jsxs("div",{className:`${C.wrapper} ${C[o?"left":"right"]}`,children:[a.sameAs(ContentTypeReply)?jsx(fe,{message:t,isIncoming:o}):jsx(N,{message:t,isIncoming:o}),jsxs("div",{className:C.time,title:t.sentAt.toLocaleString(),children:[r&&jsx("span",{className:C.readReceipt,children:"Read"}),jsx("span",{children:format(t.sentAt,"h:mm a")})]}),jsx("div",{className:C.reactions,children:jsx(Q,{conversation:e,message:t})}),jsx(he,{conversation:e,message:t})]})};var ee={wrapper:"_wrapper_9g5he_1",loading:"_loading_9g5he_8",beginning:"_beginning_9g5he_15"};var vt=(e,t,o)=>e.some(r=>isAfter(r.sentAt,t)&&isBefore(r.sentAt,o)),ht=({clientAddress:e="",conversation:t,isLoading:o=!1,messages:r=[]})=>{let a=useMemo(()=>r.filter(p=>p.senderAddress===e),[r,e]);if(o&&!r.length)return jsx("div",{className:ee.loading,children:Array.from({length:3}).map((p,i)=>jsxs(Fragment,{children:[jsx(G,{incoming:!1})," ",jsx(G,{})]},i))});let n=[],s=getReadReceipt(t);return jsx("div",{"data-testid":"message-tile-container",className:ee.wrapper,children:r.map((p,i,d)=>{n.length===0&&n.push(p.sentAt);let h=n.at(-1),m=p.senderAddress!==e,H=p.senderAddress===e,K=i===0,A=i===d.length-1,Me=isSameDay(h,p.sentAt),ie=K||A||!Me;ie&&!A&&n.push(p.sentAt);let Pe=s&&H&&isBefore(p.sentAt,s)&&(A||!vt(a,p.sentAt,s));return jsxs(Fragment,{children:[ie&&jsx(V,{date:n.at(-1)}),jsx(Z,{conversation:t,message:p,isIncoming:m,isRead:Pe},p.id)]},p.id)})})};var w={wrapper:"_wrapper_133pc_3",light:"_light_133pc_7",dark:"_dark_133pc_11",element:"_element_133pc_15 spin",elementSmall:"_elementSmall_133pc_22",elementLarge:"_elementLarge_133pc_28"};var te=({size:e,color:t="primary"})=>jsx("div",{className:w.wrapper,children:jsx("div",{className:`${w.element} ${t==="primary"?w.light:w.dark} ${e==="small"?w.elementSmall:w.elementLarge}`})});var S={wrapper:"_wrapper_7iqve_1",disabled:"_disabled_7iqve_19",primary:"_primary_7iqve_28",secondary:"_secondary_7iqve_36"};var re=({label:e=jsx(PlusCircleIcon,{width:"24",color:"white"}),variant:t="primary",isLoading:o=!1,isDisabled:r=!1,size:a="large",srText:n,onClick:s,testId:p})=>jsx("button",{"data-testid":p,type:"button",onClick:s,disabled:r,className:`${S.wrapper} ${S[t]} ${r?S.disabled:""}`,"aria-label":n,children:jsx("div",{children:o?jsx(te,{color:"primary",size:a}):e})});var F={label:"_label_1wlh2_1 visually-hidden",wrapper:"_wrapper_1wlh2_5",input:"_input_1wlh2_19"};var ke=32,Ae=forwardRef(({isDisabled:e,onSubmit:t,placeholder:o,submitSrText:r},a)=>{let n=useRef(null);useImperativeHandle(a,()=>n.current);let[s,p]=useState(""),i=m=>p(m.target.value),d=useCallback(m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),s&&(t?.(s),p("")));},[t,s]),h=useCallback(()=>{s&&(t?.(s),p(""));},[t,s]);return useLayoutEffect(()=>{if(n?.current?.value){let m=n?.current.scrollHeight;n.current.style.height=`${Math.max(m,ke)}px`;}else n?.current&&(n.current.style.height=`${ke}px`);},[s]),jsxs("div",{children:[o&&jsx("label",{htmlFor:"chat",className:F.label,children:o}),jsxs("div",{className:F.wrapper,children:[jsx("textarea",{name:"chat","data-testid":"message-input",onChange:i,onKeyDown:d,ref:n,rows:1,className:F.input,placeholder:o,value:s,disabled:e}),jsx(re,{testId:"message-input-submit",variant:"secondary",label:jsx(ArrowUpIcon,{color:"white",width:"20"}),srText:r,onClick:h,isDisabled:!s||e})]})]})});Ae.displayName="MessageInput";var oe=e=>e.length>10&&e.startsWith("0x")?`${e.substring(0,6)}...${e.substring(e.length-4)}`:e;var ae=({conversation:e,onClick:t,isSelected:o,lastMessage:r})=>{let a=r?getAttachment(r):void 0,n;a?n=a.filename:typeof r?.content=="string"?n=r.content:r?.contentFallback&&(n=r.contentFallback);let s=useCallback(i=>{i.key==="Enter"&&t?.(e);},[e,t]),p=useCallback(()=>{t?.(e);},[e,t]);return jsxs("div",{className:`${g.wrapper} ${o?g.selected:""}`,role:"button",tabIndex:0,onKeyDown:s,onClick:p,children:[jsx(u,{address:e.peerAddress}),jsxs("div",{className:g.element,children:[jsx("div",{className:g.address,children:oe(e.peerAddress)}),jsx("div",{className:g.message,children:n})]}),jsx("div",{className:g.time,children:r?.sentAt&&`${formatDistanceToNowStrict(r.sentAt)} ago`})]})};var ne=({conversation:e,isSelected:t,onClick:o,lastMessage:r})=>{let a=useCallback(()=>{o?.(e);},[e,o]);return jsx(ae,{conversation:e,isSelected:t,onClick:a,lastMessage:r})};var zt=({conversations:e=[],isLoading:t,onConversationClick:o,renderEmpty:r,selectedConversation:a})=>{let n=e.map(s=>jsx(ne,{conversation:s,isSelected:s.topic===a?.topic,onClick:o},s.topic));return jsx(W,{conversations:n,isLoading:t,renderEmpty:r})};

export { se as AddressInput, u as Avatar, te as ButtonLoader, W as ConversationList, ne as ConversationPreview, ae as ConversationPreviewCard, zt as ConversationPreviewList, V as DateDivider, re as IconButton, Z as Message, Ae as MessageInput, ht as Messages, Q as ReactionsBar, oe as shortAddress };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map