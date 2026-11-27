/* ═══════════════════════════════════════════════════════════════
   💵 암시장 위조지폐 감별단 — 지폐 SVG & 라운드 데이터 (공용)
   · index.html(청중 폰) 과 host.html(진행자) 이 함께 불러 씁니다.
   · viewBox 440 × 200 (실제 지폐 비율과 비슷한 2.2 : 1)
   ═══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var SERIF = "'Noto Serif KR','Noto Serif CJK KR',Georgia,serif";
  var SANS = "'Pretendard Variable',Pretendard,'Noto Sans KR',sans-serif";

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ── 지폐 테두리 장식 ───────────────────────────────────── */
  function frame(ink) {
    return [
      '<rect x="6.5" y="6.5" width="427" height="187" rx="8" fill="none" stroke="' + ink + '" stroke-opacity=".5" stroke-width="1.6"/>',
      '<rect x="11.5" y="11.5" width="417" height="177" rx="5" fill="none" stroke="' + ink + '" stroke-opacity=".26" stroke-width=".9"/>',
      '<g fill="none" stroke="' + ink + '" stroke-opacity=".45" stroke-width="1.1" stroke-linecap="round">',
      '<path d="M20 34 q0 -14 14 -14 M20 34 q10 0 12 8"/>',
      '<path d="M420 34 q0 -14 -14 -14 M420 34 q-10 0 -12 8"/>',
      '<path d="M20 166 q0 14 14 14 M20 166 q10 0 12 -8"/>',
      '<path d="M420 166 q0 14 -14 14 M420 166 q-10 0 -12 -8"/>',
      '</g>'
    ].join("");
  }

  /* ── 신사임당 (5만원권) ─────────────────────────────────── */
  function portraitSaimdang(ink, fake, kind) {
    var shortPin = fake && kind === "hairpin";
    var hairPins = [
      '<g stroke="#C79A3E" stroke-width="3.4" stroke-linecap="round">',
      '<line x1="' + (shortPin ? 163 : 132) + '" y1="40" x2="186" y2="40"/>',
      '</g>',
      (shortPin ? '' : '<circle cx="131" cy="40" r="4.2" fill="#E4BE63" stroke="#A8792A" stroke-width=".7"/>'),
      '<circle cx="187" cy="40" r="4.2" fill="#E4BE63" stroke="#A8792A" stroke-width=".7"/>'
    ].join("");

    return [
      '<ellipse cx="158" cy="104" rx="57" ry="65" fill="#FFF6E2"/>',
      '<ellipse cx="158" cy="104" rx="57" ry="65" fill="none" stroke="' + ink + '" stroke-opacity=".55" stroke-width="1.3"/>',
      '<ellipse cx="158" cy="104" rx="52" ry="60" fill="none" stroke="' + ink + '" stroke-opacity=".28" stroke-width=".8"/>',
      '<path d="M112 168 C117 142 132 129 158 129 C184 129 199 142 204 168 Z" fill="#F3E5CA" stroke="#B98B4E" stroke-width="1"/>',
      '<path d="M140 131 L158 150 L176 131" fill="none" stroke="#C79A5A" stroke-width="2.4"/>',
      '<path d="M126 146 C134 158 146 165 158 167" fill="none" stroke="#C79A5A" stroke-width="1.6"/>',
      '<path d="M190 146 C182 158 170 165 158 167" fill="none" stroke="#C79A5A" stroke-width="1.6"/>',
      '<path d="M146 111 h24 v20 h-24 z" fill="#F0D3AE"/>',
      '<ellipse cx="158" cy="92" rx="26" ry="31" fill="#F8E3C2"/>',
      '<ellipse cx="158" cy="92" rx="26" ry="31" fill="none" stroke="#D9A971" stroke-opacity=".5" stroke-width=".7"/>',
      '<path d="M130 100 C124 66 138 50 158 50 C178 50 192 66 186 100 C184 78 174 66 158 66 C142 66 132 78 130 100 Z" fill="#241A15"/>',
      '<ellipse cx="158" cy="45" rx="20" ry="12" fill="#241A15"/>',
      hairPins,
      '<path d="M143 82 q6 -3.4 11 0" fill="none" stroke="#3A2A20" stroke-width="1.7" stroke-linecap="round"/>',
      '<path d="M162 82 q6 -3.4 11 0" fill="none" stroke="#3A2A20" stroke-width="1.7" stroke-linecap="round"/>',
      '<path d="M142 92 q7 -4.6 14 0 q-7 4.2 -14 0 z" fill="#2B1D16"/>',
      '<path d="M160 92 q7 -4.6 14 0 q-7 4.2 -14 0 z" fill="#2B1D16"/>',
      '<circle cx="149" cy="91.6" r="1.1" fill="#FFF6E2" fill-opacity=".85"/>',
      '<circle cx="167" cy="91.6" r="1.1" fill="#FFF6E2" fill-opacity=".85"/>',
      '<path d="M158 94 v8 q0 3.4 3.4 3.4" fill="none" stroke="#D8A470" stroke-width="1.2" stroke-linecap="round"/>',
      '<path d="M151 111 q7 5 14 0" fill="none" stroke="#B5555A" stroke-width="2.1" stroke-linecap="round"/>',
      '<ellipse cx="139" cy="101" rx="6" ry="3.4" fill="#E9A79A" fill-opacity=".35"/>',
      '<ellipse cx="177" cy="101" rx="6" ry="3.4" fill="#E9A79A" fill-opacity=".35"/>',
      '<circle cx="132" cy="98" r="2" fill="#D9B45C"/>',
      '<circle cx="184" cy="98" r="2" fill="#D9B45C"/>'
    ].join("");
  }

  /* ── 세종대왕 (1만원권) ─────────────────────────────────── */
  function portraitSejong(ink) {
    return [
      '<ellipse cx="158" cy="104" rx="57" ry="65" fill="#F6FFFA"/>',
      '<ellipse cx="158" cy="104" rx="57" ry="65" fill="none" stroke="' + ink + '" stroke-opacity=".55" stroke-width="1.3"/>',
      '<ellipse cx="158" cy="104" rx="52" ry="60" fill="none" stroke="' + ink + '" stroke-opacity=".28" stroke-width=".8"/>',
      '<path d="M110 168 C116 141 132 127 158 127 C184 127 200 141 206 168 Z" fill="#EAF2EE" stroke="#6F9C8C" stroke-width="1"/>',
      '<path d="M139 129 L158 152 L177 129" fill="none" stroke="#7FAF9C" stroke-width="2.4"/>',
      '<circle cx="158" cy="146" r="4.6" fill="none" stroke="#B08A3E" stroke-width="1.8"/>',
      '<path d="M146 108 h24 v22 h-24 z" fill="#EFD2AA"/>',
      '<ellipse cx="158" cy="92" rx="25" ry="30" fill="#F7DFB9"/>',
      '<ellipse cx="158" cy="92" rx="25" ry="30" fill="none" stroke="#D6A46A" stroke-opacity=".5" stroke-width=".7"/>',
      '<path d="M131 79 C131 57 143 48 158 48 C173 48 185 57 185 79 Z" fill="#20242A"/>',
      '<path d="M129 76 h58 v7 h-58 z" fill="#12151A"/>',
      '<path d="M126 70 q-12 -8 -20 3 q9 1 16 7 z" fill="#20242A"/>',
      '<path d="M190 70 q12 -8 20 3 q-9 1 -16 7 z" fill="#20242A"/>',
      '<path d="M138 62 q20 -10 40 0" fill="none" stroke="#4A5058" stroke-width="1.2"/>',
      '<path d="M143 81 q6 -3.6 11 -0.4" fill="none" stroke="#33261C" stroke-width="2.1" stroke-linecap="round"/>',
      '<path d="M162 80.6 q5 -3.2 11 0.4" fill="none" stroke="#33261C" stroke-width="2.1" stroke-linecap="round"/>',
      '<path d="M142 91 q6.5 -4 13 0 q-6.5 4 -13 0 z" fill="#2B1D16"/>',
      '<path d="M161 91 q6.5 -4 13 0 q-6.5 4 -13 0 z" fill="#2B1D16"/>',
      '<path d="M158 93 v9 q0 3.4 3.6 3.4" fill="none" stroke="#D2A06A" stroke-width="1.3" stroke-linecap="round"/>',
      '<path d="M144 110 q14 -5 28 0 q-6 7 -14 6 q-8 1 -14 -6 z" fill="#2B221C"/>',
      '<path d="M140 118 q18 30 36 0 q-3 24 -18 26 q-15 -2 -18 -26 z" fill="#33281F"/>',
      '<path d="M152 121 q6 3 12 0" fill="none" stroke="#8A6A56" stroke-width="1.4"/>'
    ].join("");
  }

  /* ── 벤저민 프랭클린 (100달러) ──────────────────────────── */
  function portraitFranklin(ink, fake, kind) {
    var mustache = fake && kind === "mustache";
    return [
      '<ellipse cx="220" cy="100" rx="58" ry="66" fill="#F3F4E4"/>',
      '<ellipse cx="220" cy="100" rx="58" ry="66" fill="none" stroke="' + ink + '" stroke-opacity=".5" stroke-width="1.3"/>',
      '<ellipse cx="220" cy="100" rx="52" ry="60" fill="none" stroke="' + ink + '" stroke-opacity=".26" stroke-width=".8"/>',
      '<path d="M172 168 C180 140 198 128 220 128 C242 128 260 140 268 168 Z" fill="#E7E3CE" stroke="#7C8464" stroke-width="1"/>',
      '<path d="M200 130 L220 148 L240 130" fill="none" stroke="#7C8464" stroke-width="2"/>',
      '<path d="M220 148 v20" stroke="#A9AE8C" stroke-width="1.4"/>',
      '<path d="M208 106 h24 v22 h-24 z" fill="#E6CBA2"/>',
      '<ellipse cx="220" cy="90" rx="25" ry="31" fill="#F0DAB4"/>',
      '<ellipse cx="220" cy="90" rx="25" ry="31" fill="none" stroke="#C9A472" stroke-opacity=".5" stroke-width=".7"/>',
      '<path d="M195 86 C193 62 205 52 220 52 C235 52 247 62 245 86 C240 70 232 64 220 64 C208 64 200 70 195 86 Z" fill="#D9D4C0"/>',
      '<path d="M195 84 C188 102 187 124 190 142 C193 148 198 146 197 138 C194 120 195 100 200 86 Z" fill="#CFC9B3"/>',
      '<path d="M245 84 C252 102 253 124 250 142 C247 148 242 146 243 138 C246 120 245 100 240 86 Z" fill="#CFC9B3"/>',
      '<path d="M204 80 q6 -3 11 0" fill="none" stroke="#5C5347" stroke-width="1.8" stroke-linecap="round"/>',
      '<path d="M225 80 q5 -3 11 0" fill="none" stroke="#5C5347" stroke-width="1.8" stroke-linecap="round"/>',
      '<path d="M203 89 q7 -4 14 0 q-7 4 -14 0 z" fill="#3B3229"/>',
      '<path d="M224 89 q7 -4 14 0 q-7 4 -14 0 z" fill="#3B3229"/>',
      '<path d="M220 92 v9 q0 3.4 3.8 3.4" fill="none" stroke="#C69E70" stroke-width="1.3" stroke-linecap="round"/>',
      mustache
        ? '<path d="M206 104 q14 -3 28 0 q-1 6 -9 6 q-5 0 -5 -3 q0 3 -5 3 q-8 0 -9 -6 z" fill="#5F5648"/>' +
          '<path d="M211 113 q9 3 18 0" fill="none" stroke="#A87A72" stroke-width="1.8" stroke-linecap="round"/>'
        : '<path d="M208 111 q12 4 24 0" fill="none" stroke="#A87A72" stroke-width="2" stroke-linecap="round"/>'
    ].join("");
  }

  /* ── 지폐 빌더 ──────────────────────────────────────────── */
  function build(type, uid, fake, opt) {
    opt = opt || {};
    var kind = opt.kind || "";
    var ink, defs, body;

    if (type === "w50000") {
      ink = "#7A3E08";
      var numWrong = fake && kind === "numeral";
      defs =
        '<linearGradient id="g' + uid + '" x1="0" y1="0" x2=".85" y2="1">' +
        '<stop offset="0" stop-color="#FCDB96"/><stop offset=".45" stop-color="#F0B14C"/><stop offset="1" stop-color="#D9862B"/>' +
        '</linearGradient>' +
        '<radialGradient id="r' + uid + '" cx=".5" cy=".45" r=".62">' +
        '<stop offset="0" stop-color="#FFF3D2" stop-opacity=".75"/><stop offset="1" stop-color="#FFF3D2" stop-opacity="0"/>' +
        '</radialGradient>' +
        '<pattern id="p' + uid + '" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(32)">' +
        '<path d="M0 3.5h7" stroke="#7A3E08" stroke-opacity=".16" stroke-width=".8"/>' +
        '<path d="M0 6.2h7" stroke="#FFFFFF" stroke-opacity=".22" stroke-width=".6"/>' +
        '</pattern>';
      body = [
        '<rect width="440" height="200" rx="10" fill="url(#g' + uid + ')"/>',
        '<rect width="440" height="200" rx="10" fill="url(#p' + uid + ')"/>',
        '<rect width="440" height="200" rx="10" fill="url(#r' + uid + ')"/>',
        frame(ink),
        '<g stroke="#8A4A10" stroke-opacity=".2" fill="none" stroke-width=".7">' +
        '<circle cx="366" cy="118" r="62"/><circle cx="366" cy="118" r="52"/><circle cx="366" cy="118" r="42"/>' +
        '</g>',
        '<text x="366" y="134" text-anchor="middle" font-family="' + SERIF + '" font-size="46" font-weight="700" fill="#8A4A10" fill-opacity=".16">5</text>',
        '<rect x="230" y="14" width="3" height="172" fill="#FFF6DC" fill-opacity=".55"/>',
        portraitSaimdang(ink, fake, kind),
        '<text x="24" y="34" font-family="' + SERIF + '" font-size="14" font-weight="700" letter-spacing="2.4" fill="#6B3706">한국은행</text>',
        '<text x="24" y="68" font-family="' + SERIF + '" font-size="23" font-weight="700" letter-spacing="1" fill="#5B2E05">오만원</text>',
        '<text x="24" y="180" font-family="' + SANS + '" font-size="10.5" letter-spacing="1.2" fill="#B03A2E">' + esc(opt.serial || "AA 2048153") + '</text>',
        '<text x="414" y="52" text-anchor="end" font-family="' + SERIF + '" font-size="' + (numWrong ? 27 : 30) + '" font-weight="700" letter-spacing="1" fill="#5B2E05">' + (numWrong ? "500000" : "50000") + '</text>',
        '<text x="414" y="74" text-anchor="end" font-family="' + SERIF + '" font-size="13" font-weight="700" letter-spacing="3" fill="#6B3706">오만원</text>',
        '<circle cx="352" cy="172" r="15" fill="none" stroke="#B03A2E" stroke-opacity=".8" stroke-width="1.4"/>',
        '<text x="352" y="176" text-anchor="middle" font-family="' + SERIF + '" font-size="9" font-weight="700" fill="#B03A2E" fill-opacity=".9">총재</text>',
        '<text x="334" y="180" text-anchor="end" font-family="' + SANS + '" font-size="9.5" letter-spacing=".6" fill="#6B3706">한국은행 총재</text>',
        '<text x="414" y="188" text-anchor="end" font-family="' + SERIF + '" font-size="13" font-weight="700" letter-spacing="1" fill="#5B2E05">오만원</text>'
      ].join("");
      return defs + body;
    }

    if (type === "w10000") {
      ink = "#1F5F45";
      defs =
        '<linearGradient id="g' + uid + '" x1="0" y1="0" x2=".85" y2="1">' +
        '<stop offset="0" stop-color="#C8EBD6"/><stop offset=".45" stop-color="#8FD3B4"/><stop offset="1" stop-color="#4FA98A"/>' +
        '</linearGradient>' +
        '<radialGradient id="r' + uid + '" cx=".5" cy=".45" r=".62">' +
        '<stop offset="0" stop-color="#F2FFF8" stop-opacity=".7"/><stop offset="1" stop-color="#F2FFF8" stop-opacity="0"/>' +
        '</radialGradient>' +
        '<pattern id="p' + uid + '" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-32)">' +
        '<path d="M0 3.5h7" stroke="#14513A" stroke-opacity=".16" stroke-width=".8"/>' +
        '<path d="M0 6.2h7" stroke="#FFFFFF" stroke-opacity=".22" stroke-width=".6"/>' +
        '</pattern>';
      body = [
        '<rect width="440" height="200" rx="10" fill="url(#g' + uid + ')"/>',
        '<rect width="440" height="200" rx="10" fill="url(#p' + uid + ')"/>',
        '<rect width="440" height="200" rx="10" fill="url(#r' + uid + ')"/>',
        frame(ink),
        '<g stroke="#14513A" stroke-opacity=".18" fill="none" stroke-width=".7">' +
        '<circle cx="366" cy="118" r="62"/><circle cx="366" cy="118" r="52"/><circle cx="366" cy="118" r="42"/>' +
        '</g>',
        '<text x="366" y="134" text-anchor="middle" font-family="' + SERIF + '" font-size="46" font-weight="700" fill="#14513A" fill-opacity=".15">1</text>',
        '<rect x="230" y="14" width="3" height="172" fill="#F2FFF8" fill-opacity=".5"/>',
        portraitSejong(ink),
        '<text x="24" y="36" font-family="' + SERIF + '" font-size="21" font-weight="700" letter-spacing="2.6" fill="#134E38">' + (fake && kind === "typo" ? "한극은행" : "한국은행") + '</text>',
        '<text x="24" y="70" font-family="' + SERIF + '" font-size="23" font-weight="700" letter-spacing="1" fill="#12402E">만원</text>',
        '<text x="24" y="180" font-family="' + SANS + '" font-size="10.5" letter-spacing="1.2" fill="#B03A2E">' + esc(opt.serial || "BB 7712094") + '</text>',
        '<text x="414" y="52" text-anchor="end" font-family="' + SERIF + '" font-size="30" font-weight="700" letter-spacing="1" fill="#12402E">10000</text>',
        '<text x="414" y="74" text-anchor="end" font-family="' + SERIF + '" font-size="13" font-weight="700" letter-spacing="3" fill="#134E38">만원</text>',
        '<circle cx="352" cy="172" r="15" fill="none" stroke="#B03A2E" stroke-opacity=".8" stroke-width="1.4"/>',
        '<text x="352" y="176" text-anchor="middle" font-family="' + SERIF + '" font-size="9" font-weight="700" fill="#B03A2E" fill-opacity=".9">총재</text>',
        '<text x="334" y="180" text-anchor="end" font-family="' + SANS + '" font-size="9.5" letter-spacing=".6" fill="#134E38">한국은행 총재</text>',
        '<text x="414" y="188" text-anchor="end" font-family="' + SERIF + '" font-size="13" font-weight="700" letter-spacing="1" fill="#12402E">일만원</text>'
      ].join("");
      return defs + body;
    }

    if (type === "check") {
      ink = "#1E3A63";
      defs =
        '<linearGradient id="g' + uid + '" x1="0" y1="0" x2=".85" y2="1">' +
        '<stop offset="0" stop-color="#DCEBFA"/><stop offset=".45" stop-color="#B9D5F0"/><stop offset="1" stop-color="#8FB6DE"/>' +
        '</linearGradient>' +
        '<pattern id="p' + uid + '" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
        '<path d="M0 4h8" stroke="#1E3A63" stroke-opacity=".12" stroke-width=".7"/>' +
        '</pattern>';
      body = [
        '<rect width="440" height="200" rx="10" fill="url(#g' + uid + ')"/>',
        '<rect width="440" height="200" rx="10" fill="url(#p' + uid + ')"/>',
        '<rect x="6.5" y="6.5" width="427" height="187" rx="8" fill="none" stroke="' + ink + '" stroke-opacity=".55" stroke-width="2"/>',
        '<rect x="13" y="13" width="414" height="174" rx="4" fill="none" stroke="' + ink + '" stroke-opacity=".3" stroke-width="1"/>',
        '<text x="240" y="40" text-anchor="middle" font-family="' + SERIF + '" font-size="23" font-weight="700" letter-spacing="7" fill="#16304F">십만원권 수표</text>',
        '<text x="240" y="58" text-anchor="middle" font-family="' + SANS + '" font-size="9" letter-spacing="2.4" fill="#3E5F86">CASHIER\u2019S CHECK · \u20A9100,000</text>',
        '<line x1="24" y1="70" x2="416" y2="70" stroke="#1E3A63" stroke-opacity=".35" stroke-width="1"/>',
        '<text x="26" y="94" font-family="' + SANS + '" font-size="10" letter-spacing="1" fill="#3E5F86">금 액</text>',
        '<text x="26" y="120" font-family="' + SERIF + '" font-size="26" font-weight="700" letter-spacing="1" fill="#12233B">\u20A9100,000</text>',
        '<text x="26" y="141" font-family="' + SERIF + '" font-size="13" font-weight="700" letter-spacing="2" fill="#1E3A63">일십만원정</text>',
        '<text x="26" y="166" font-family="' + SANS + '" font-size="10" letter-spacing=".6" fill="#3E5F86">발행일 2026년 11월 27일</text>',
        '<text x="26" y="182" font-family="' + SANS + '" font-size="10" letter-spacing=".6" fill="#3E5F86">발행인 (주)스마일브라더</text>',
        '<text x="240" y="166" font-family="' + SANS + '" font-size="9.5" letter-spacing=".6" fill="#3E5F86">NO. 000123</text>',
        '<text x="240" y="182" font-family="' + SANS + '" font-size="9.5" letter-spacing=".6" fill="#3E5F86">한국은행 영업부</text>',
        '<rect x="338" y="94" width="70" height="70" rx="8" fill="#C0392B" fill-opacity=".92"/>',
        '<rect x="343" y="99" width="60" height="60" rx="5" fill="none" stroke="#FFF1EC" stroke-opacity=".8" stroke-width="1.4"/>',
        '<text x="373" y="133" text-anchor="middle" font-family="' + SERIF + '" font-size="17" font-weight="700" letter-spacing=".5" fill="#FFF1EC">' + (fake && kind === "seal" ? "정진명" : "정진영") + '</text>',
        '<text x="373" y="149" text-anchor="middle" font-family="' + SANS + '" font-size="7.5" letter-spacing="1" fill="#FFF1EC" fill-opacity=".9">대표이사</text>'
      ].join("");
      return defs + body;
    }

    if (type === "usd100") {
      ink = "#3E5B33";
      defs =
        '<linearGradient id="g' + uid + '" x1="0" y1="0" x2=".85" y2="1">' +
        '<stop offset="0" stop-color="#EEF2D8"/><stop offset=".45" stop-color="#DCE4C0"/><stop offset="1" stop-color="#BFCE9C"/>' +
        '</linearGradient>' +
        '<pattern id="p' + uid + '" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">' +
        '<path d="M0 3.5h7" stroke="#3E5B33" stroke-opacity=".13" stroke-width=".8"/>' +
        '</pattern>';
      body = [
        '<rect width="440" height="200" rx="10" fill="url(#g' + uid + ')"/>',
        '<rect width="440" height="200" rx="10" fill="url(#p' + uid + ')"/>',
        '<rect x="6.5" y="6.5" width="427" height="187" rx="8" fill="none" stroke="' + ink + '" stroke-opacity=".5" stroke-width="1.8"/>',
        '<rect x="12" y="12" width="416" height="176" rx="5" fill="none" stroke="' + ink + '" stroke-opacity=".28" stroke-width=".9"/>',
        '<text x="220" y="34" text-anchor="middle" font-family="' + SERIF + '" font-size="12" font-weight="700" letter-spacing="2.2" fill="#33502A">UNITED STATES OF AMERICA</text>',
        portraitFranklin(ink, fake, kind),
        '<text x="28" y="52" font-family="' + SERIF + '" font-size="26" font-weight="700" fill="#33502A">100</text>',
        '<text x="412" y="52" text-anchor="end" font-family="' + SERIF + '" font-size="26" font-weight="700" fill="#33502A">100</text>',
        '<text x="28" y="176" font-family="' + SERIF + '" font-size="26" font-weight="700" fill="#33502A">100</text>',
        '<text x="412" y="176" text-anchor="end" font-family="' + SERIF + '" font-size="26" font-weight="700" fill="#33502A">100</text>',
        '<text x="220" y="186" text-anchor="middle" font-family="' + SERIF + '" font-size="12" font-weight="700" letter-spacing="2.4" fill="#33502A">ONE HUNDRED DOLLARS</text>',
        '<text x="76" y="150" font-family="' + SANS + '" font-size="8.5" letter-spacing="1" fill="#4E6B41">FEDERAL RESERVE NOTE</text>',
        '<text x="76" y="164" font-family="' + SANS + '" font-size="8.5" letter-spacing="1" fill="#4E6B41">SERIES 2026 · ' + esc(opt.serial || "FB 88204113") + '</text>',
        '<circle cx="366" cy="146" r="24" fill="#4E7A45" fill-opacity=".85"/>',
        '<circle cx="366" cy="146" r="19" fill="none" stroke="#EFF3E0" stroke-opacity=".7" stroke-width="1.2"/>',
        '<text x="366" y="151" text-anchor="middle" font-family="' + SERIF + '" font-size="14" font-weight="700" fill="#EFF3E0">100</text>'
      ].join("");
      return defs + body;
    }

    return "";
  }

  /* ── 공개 API ───────────────────────────────────────────── */
  function noteSVG(type, opts) {
    opts = opts || {};
    var uid = opts.uid || "a";
    var viewBox = opts.viewBox || "0 0 440 200";
    var inner = build(type, uid, !!opts.fake, opts);
    return '<svg class="noteSvg" viewBox="' + viewBox + '" preserveAspectRatio="xMidYMid meet" ' +
      'xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" aria-hidden="true">' +
      '<defs></defs>' + inner + '</svg>';
  }

  /* ── 라운드 정의 ────────────────────────────────────────── */
  /* ask     : 'real' = 진짜를 찾아라 / 'fake' = 가짜를 찾아라
     answer  : 눌러야 하는 지폐 번호 (0=A, 1=B, 2=C)
     fakeIdx : 가짜 지폐 번호 (결과 공개 때 빨간 동그라미 위치)
     diff    : 위조 포인트 좌표 (지폐 viewBox 기준) */
  var ROUNDS = [
    {
      n: 1, type: "w50000", title: "5만원권", name: "오만원권 · 신사임당",
      ask: "real", answer: 0, fakeIdx: 1, count: 2, kind: "numeral",
      tip: "금액 숫자를 자세히 보세요",
      explain: "가짜 B의 숫자는 500000 — 0이 하나 더 붙었습니다. 진짜는 50000.",
      diff: { x: 362, y: 42, r: 45 }
    },
    {
      n: 2, type: "w10000", title: "1만원권", name: "일만원권 · 세종대왕",
      ask: "real", answer: 1, fakeIdx: 0, count: 2, kind: "typo",
      tip: "은행 이름을 소리 내어 읽어 보세요",
      explain: "가짜 A는 은행 이름이 ‘한극은행’으로 찍혔습니다. 진짜는 ‘한국은행’.",
      diff: { x: 74, y: 28, r: 54 }
    },
    {
      n: 3, type: "check", title: "10만원권 수표", name: "십만원권 수표 · 도장",
      ask: "real", answer: 0, fakeIdx: 1, count: 2, kind: "seal",
      tip: "도장에 찍힌 이름을 보세요",
      explain: "가짜 B의 도장은 ‘정진명’ — 진짜 발행인 도장은 ‘정진영’입니다.",
      diff: { x: 373, y: 129, r: 48 }
    },
    {
      n: 4, type: "usd100", title: "100달러", name: "백달러 · 벤저민 프랭클린",
      ask: "real", answer: 1, fakeIdx: 0, count: 2, kind: "mustache",
      tip: "초상화의 얼굴을 보세요",
      explain: "가짜 A의 프랭클린에게는 콧수염이 있습니다. 진짜는 깨끗한 얼굴.",
      diff: { x: 220, y: 112, r: 34 }
    },
    {
      n: 5, type: "w50000", title: "최종 보스", name: "오만원권 3장 · 가짜는 하나",
      ask: "fake", answer: 1, fakeIdx: 1, count: 3, kind: "hairpin",
      tip: "보스 라운드 — 시간이 3초 짧아요!",
      explain: "가짜 B의 신사임당 비녀는 왼쪽이 짧습니다. 진짜는 양쪽이 똑같이 길어요.",
      diff: { x: 141, y: 41, r: 28 }
    }
  ];

  window.FM = {
    ROUNDS: ROUNDS,
    noteSVG: noteSVG,
    roundCount: ROUNDS.length,
    askLabel: function (r) {
      return r.ask === "fake" ? "가짜 지폐를 찾아라!" : "진짜 지폐를 찾아라!";
    },
    /* 점수: 기본 100(보스 200) + 속도 보너스 최대 기본만큼 */
    score: function (round, ok, elapsedMs, durMs) {
      if (!ok) return 0;
      var base = round === 5 ? 200 : 100;
      var ratio = Math.max(0, Math.min(1, 1 - elapsedMs / Math.max(1, durMs)));
      return base + Math.round(base * ratio);
    }
  };
})();
