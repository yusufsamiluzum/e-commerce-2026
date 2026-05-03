import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-MKAKFE2K.js";
import {
  UserService
} from "./chunk-M7X4I4M4.js";
import {
  CommonModule,
  Component,
  catchError,
  inject,
  of,
  setClassMetadata,
  shareReplay,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// src/app/features/individual/profile/my-preferences/my-preferences.ts
var _c0 = () => [1, 2, 3];
var _c1 = () => [1, 2];
function MyPreferences_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function MyPreferences_Conditional_7_For_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 11);
    \u0275\u0275element(2, "div", 16)(3, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function MyPreferences_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "div", 10);
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275element(4, "div", 12)(5, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275repeaterCreate(7, MyPreferences_Conditional_7_For_2_For_8_Template, 5, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function MyPreferences_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, MyPreferences_Conditional_7_For_2_Template, 9, 1, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function MyPreferences_Conditional_8_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementEnd();
  }
}
function MyPreferences_Conditional_8_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementEnd();
  }
}
function MyPreferences_Conditional_8_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementEnd();
  }
}
function MyPreferences_Conditional_8_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementEnd();
  }
}
function MyPreferences_Conditional_8_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementEnd();
  }
}
function MyPreferences_Conditional_8_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 72);
    \u0275\u0275element(2, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Tercihleriniz ba\u015Far\u0131yla kaydedildi! ");
    \u0275\u0275elementEnd();
  }
}
function MyPreferences_Conditional_8_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saveError(), " ");
  }
}
function MyPreferences_Conditional_8_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 74);
    \u0275\u0275text(1, " Kaydediliyor... ");
  }
}
function MyPreferences_Conditional_8_Conditional_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 75);
    \u0275\u0275text(1, " De\u011Fi\u015Fiklikleri Kaydet ");
  }
}
function MyPreferences_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 19);
    \u0275\u0275listener("ngSubmit", function MyPreferences_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePreferences());
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "div", 21);
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 23)(5, "span", 24);
    \u0275\u0275element(6, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26)(8, "div", 27)(9, "h3", 28);
    \u0275\u0275text(10, "Bildirim Ayarlar\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275element(12, "i", 30);
    \u0275\u0275text(13, " Yak\u0131nda Aktif ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 31);
    \u0275\u0275text(15, "Tercihleriniz kaydedilir; bildirim sistemi entegrasyonu tamamland\u0131\u011F\u0131nda devreye girer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "label", 32)(17, "div", 33)(18, "div", 34);
    \u0275\u0275element(19, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "p", 36);
    \u0275\u0275text(22, " E-posta Bildirimleri ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 31);
    \u0275\u0275text(24, "Sipari\u015F g\xFCncellemeleri ve kampanyalar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 37);
    \u0275\u0275element(26, "input", 38);
    \u0275\u0275elementStart(27, "div", 39);
    \u0275\u0275element(28, "div", 40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "label", 32)(30, "div", 33)(31, "div", 34);
    \u0275\u0275element(32, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "p", 36);
    \u0275\u0275text(35, " SMS Bildirimleri ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 31);
    \u0275\u0275text(37, "Kargo durumu ve acil uyar\u0131lar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 37);
    \u0275\u0275element(39, "input", 42);
    \u0275\u0275elementStart(40, "div", 39);
    \u0275\u0275element(41, "div", 40);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(42, "div", 20);
    \u0275\u0275element(43, "div", 43);
    \u0275\u0275elementStart(44, "div", 22)(45, "div", 23)(46, "span", 44);
    \u0275\u0275element(47, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 26)(49, "div", 27)(50, "h3", 28);
    \u0275\u0275text(51, "Tema Se\xE7imi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 46);
    \u0275\u0275element(53, "i", 30);
    \u0275\u0275text(54, " Yak\u0131nda ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "p", 31);
    \u0275\u0275text(56, "Tema tercihiniz kaydedilir; uygulama geneli tema deste\u011Fi yak\u0131nda gelecek");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(57, "input", 47);
    \u0275\u0275elementStart(58, "div", 48)(59, "button", 49);
    \u0275\u0275listener("click", function MyPreferences_Conditional_8_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectTheme("LIGHT"));
    });
    \u0275\u0275conditionalCreate(60, MyPreferences_Conditional_8_Conditional_60_Template, 2, 0, "div", 50);
    \u0275\u0275elementStart(61, "div", 51);
    \u0275\u0275text(62, "\u2600\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 52);
    \u0275\u0275text(64, "A\xE7\u0131k");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 53);
    \u0275\u0275text(66, "Light mode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "button", 54);
    \u0275\u0275listener("click", function MyPreferences_Conditional_8_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectTheme("DARK"));
    });
    \u0275\u0275conditionalCreate(68, MyPreferences_Conditional_8_Conditional_68_Template, 2, 0, "div", 50);
    \u0275\u0275elementStart(69, "div", 51);
    \u0275\u0275text(70, "\u{1F319}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 52);
    \u0275\u0275text(72, "Koyu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 53);
    \u0275\u0275text(74, "Dark mode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "button", 54);
    \u0275\u0275listener("click", function MyPreferences_Conditional_8_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectTheme("SYSTEM"));
    });
    \u0275\u0275conditionalCreate(76, MyPreferences_Conditional_8_Conditional_76_Template, 2, 0, "div", 50);
    \u0275\u0275elementStart(77, "div", 51);
    \u0275\u0275text(78, "\u{1F4BB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 52);
    \u0275\u0275text(80, "Sistem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 53);
    \u0275\u0275text(82, "Auto");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(83, "div", 20);
    \u0275\u0275element(84, "div", 55);
    \u0275\u0275elementStart(85, "div", 22)(86, "div", 23)(87, "span", 56);
    \u0275\u0275element(88, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 26)(90, "div", 27)(91, "h3", 28);
    \u0275\u0275text(92, "Dil Se\xE7imi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span", 58);
    \u0275\u0275element(94, "i", 30);
    \u0275\u0275text(95, " Yak\u0131nda ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "p", 31);
    \u0275\u0275text(97, "Dil tercihiniz kaydedilir; \xE7oklu dil deste\u011Fi yak\u0131nda eklenecek");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(98, "input", 59);
    \u0275\u0275elementStart(99, "div", 60)(100, "button", 61);
    \u0275\u0275listener("click", function MyPreferences_Conditional_8_Template_button_click_100_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectLanguage("TR"));
    });
    \u0275\u0275conditionalCreate(101, MyPreferences_Conditional_8_Conditional_101_Template, 2, 0, "div", 62);
    \u0275\u0275elementStart(102, "span", 63);
    \u0275\u0275text(103, "\u{1F1F9}\u{1F1F7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div")(105, "p", 64);
    \u0275\u0275text(106, "T\xFCrk\xE7e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "p", 65);
    \u0275\u0275text(108, "Turkish");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "button", 61);
    \u0275\u0275listener("click", function MyPreferences_Conditional_8_Template_button_click_109_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectLanguage("EN"));
    });
    \u0275\u0275conditionalCreate(110, MyPreferences_Conditional_8_Conditional_110_Template, 2, 0, "div", 62);
    \u0275\u0275elementStart(111, "span", 63);
    \u0275\u0275text(112, "\u{1F1EC}\u{1F1E7}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div")(114, "p", 64);
    \u0275\u0275text(115, "English");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "p", 65);
    \u0275\u0275text(117, "\u0130ngilizce");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275conditionalCreate(118, MyPreferences_Conditional_8_Conditional_118_Template, 4, 0, "div", 66);
    \u0275\u0275conditionalCreate(119, MyPreferences_Conditional_8_Conditional_119_Template, 3, 1, "div", 4);
    \u0275\u0275elementStart(120, "div", 67)(121, "p", 68);
    \u0275\u0275element(122, "i", 69);
    \u0275\u0275text(123, " Ayarlar\u0131n\u0131z g\xFCvenle saklanmaktad\u0131r. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "button", 70);
    \u0275\u0275conditionalCreate(125, MyPreferences_Conditional_8_Conditional_125_Template, 2, 0)(126, MyPreferences_Conditional_8_Conditional_126_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.preferencesForm);
    \u0275\u0275advance(16);
    \u0275\u0275styleMap(ctx_r0.emailOn ? "background: rgba(59,130,246,0.05)" : "background: rgba(255,255,255,0.02)");
    \u0275\u0275classMap(ctx_r0.emailOn ? "border-blue-500/30 hover:border-blue-500/50" : "border-white/5 hover:border-white/10");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.emailOn ? "background: rgba(59,130,246,0.15)" : "background: rgba(255,255,255,0.04)");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.emailOn ? "text-blue-400" : "text-gray-600");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.emailOn ? "text-white" : "text-gray-400");
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(ctx_r0.emailOn ? "background: #2563eb; box-shadow: 0 0 12px rgba(37,99,235,0.4)" : "background: rgba(255,255,255,0.08)");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.emailOn ? "bg-white left-6" : "bg-gray-500 left-0.5");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r0.smsOn ? "background: rgba(59,130,246,0.05)" : "background: rgba(255,255,255,0.02)");
    \u0275\u0275classMap(ctx_r0.smsOn ? "border-blue-500/30 hover:border-blue-500/50" : "border-white/5 hover:border-white/10");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.smsOn ? "background: rgba(59,130,246,0.15)" : "background: rgba(255,255,255,0.04)");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.smsOn ? "text-blue-400" : "text-gray-600");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.smsOn ? "text-white" : "text-gray-400");
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(ctx_r0.smsOn ? "background: #2563eb; box-shadow: 0 0 12px rgba(37,99,235,0.4)" : "background: rgba(255,255,255,0.08)");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.smsOn ? "bg-white left-6" : "bg-gray-500 left-0.5");
    \u0275\u0275advance(18);
    \u0275\u0275styleMap(ctx_r0.theme !== "LIGHT" ? "background: rgba(255,255,255,0.02)" : "");
    \u0275\u0275classMap(ctx_r0.theme === "LIGHT" ? "border-violet-500/50 bg-violet-500/10" : "border-white/5 hover:border-white/15");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.theme === "LIGHT" ? 60 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.theme === "LIGHT" ? "text-violet-300" : "text-gray-400");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(ctx_r0.theme !== "DARK" ? "background: rgba(255,255,255,0.02)" : "");
    \u0275\u0275classMap(ctx_r0.theme === "DARK" ? "border-violet-500/50 bg-violet-500/10" : "border-white/5 hover:border-white/15");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.theme === "DARK" ? 68 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.theme === "DARK" ? "text-violet-300" : "text-gray-400");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(ctx_r0.theme !== "SYSTEM" ? "background: rgba(255,255,255,0.02)" : "");
    \u0275\u0275classMap(ctx_r0.theme === "SYSTEM" ? "border-violet-500/50 bg-violet-500/10" : "border-white/5 hover:border-white/15");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.theme === "SYSTEM" ? 76 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.theme === "SYSTEM" ? "text-violet-300" : "text-gray-400");
    \u0275\u0275advance(21);
    \u0275\u0275styleMap(ctx_r0.language !== "TR" ? "background: rgba(255,255,255,0.02)" : "background: rgba(16,185,129,0.06)");
    \u0275\u0275classMap(ctx_r0.language === "TR" ? "border-emerald-500/50 bg-emerald-500/8" : "border-white/5 hover:border-white/15");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.language === "TR" ? 101 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r0.language === "TR" ? "text-emerald-300" : "text-gray-400");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(ctx_r0.language !== "EN" ? "background: rgba(255,255,255,0.02)" : "background: rgba(16,185,129,0.06)");
    \u0275\u0275classMap(ctx_r0.language === "EN" ? "border-emerald-500/50 bg-emerald-500/8" : "border-white/5 hover:border-white/15");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.language === "EN" ? 110 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r0.language === "EN" ? "text-emerald-300" : "text-gray-400");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.saveSuccess() ? 118 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saveError() ? 119 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.isSaving() || !ctx_r0.preferencesForm.dirty);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isSaving() ? 125 : 126);
  }
}
var MyPreferences = class _MyPreferences {
  fb = inject(FormBuilder);
  userService = inject(UserService);
  preferencesForm;
  // null → yükleniyor | object → dolu
  isLoaded = signal(false, ...ngDevMode ? [{ debugName: "isLoaded" }] : (
    /* istanbul ignore next */
    []
  ));
  apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : (
    /* istanbul ignore next */
    []
  ));
  isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
    /* istanbul ignore next */
    []
  ));
  saveSuccess = signal(false, ...ngDevMode ? [{ debugName: "saveSuccess" }] : (
    /* istanbul ignore next */
    []
  ));
  saveError = signal("", ...ngDevMode ? [{ debugName: "saveError" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.preferencesForm = this.fb.group({
      emailNotifications: [true],
      smsNotifications: [false],
      theme: ["LIGHT"],
      language: ["TR"]
    });
    this.userService.getMyPreferences().pipe(shareReplay(1), catchError(() => {
      this.apiError.set("Tercihler y\xFCklenirken bir hata olu\u015Ftu.");
      this.isLoaded.set(true);
      return of(null);
    })).subscribe((prefs) => {
      if (prefs) {
        this.preferencesForm.patchValue({
          emailNotifications: prefs.emailNotifications,
          smsNotifications: prefs.smsNotifications,
          theme: prefs.theme,
          language: prefs.language
        });
        this.preferencesForm.markAsPristine();
      }
      this.isLoaded.set(true);
    });
  }
  /** Tema card seçici */
  selectTheme(value) {
    this.preferencesForm.get("theme").setValue(value);
    this.preferencesForm.markAsDirty();
  }
  /** Dil card seçici */
  selectLanguage(value) {
    this.preferencesForm.get("language").setValue(value);
    this.preferencesForm.markAsDirty();
  }
  /** Toggle değeri kolayca oku */
  get emailOn() {
    return !!this.preferencesForm.get("emailNotifications")?.value;
  }
  get smsOn() {
    return !!this.preferencesForm.get("smsNotifications")?.value;
  }
  get theme() {
    return this.preferencesForm.get("theme")?.value ?? "LIGHT";
  }
  get language() {
    return this.preferencesForm.get("language")?.value ?? "TR";
  }
  savePreferences() {
    if (this.preferencesForm.invalid || this.isSaving())
      return;
    this.isSaving.set(true);
    this.saveSuccess.set(false);
    this.saveError.set("");
    const updatedPrefs = this.preferencesForm.value;
    this.userService.updateMyPreferences(updatedPrefs).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.saveSuccess.set(true);
        this.preferencesForm.markAsPristine();
        setTimeout(() => this.saveSuccess.set(false), 3e3);
      },
      error: (err) => {
        this.isSaving.set(false);
        this.saveError.set("Tercihler kaydedilirken bir hata olu\u015Ftu. L\xFCtfen tekrar deneyin.");
        setTimeout(() => this.saveError.set(""), 4e3);
      }
    });
  }
  static \u0275fac = function MyPreferences_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyPreferences)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyPreferences, selectors: [["app-my-preferences"]], decls: 9, vars: 2, consts: [[1, "p-6", "md:p-8", "space-y-6"], [1, "pb-5", "border-b", "border-white/5"], [1, "text-2xl", "font-black", "text-white", "tracking-tight"], [1, "text-gray-500", "text-sm", "mt-1"], [1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border", "border-red-500/30", "text-red-400", "text-sm", "font-medium", 2, "background", "rgba(239,68,68,0.08)"], [1, "max-w-2xl", "space-y-5"], [1, "max-w-2xl", "space-y-5", 3, "formGroup"], [1, "fas", "fa-exclamation-circle", "flex-shrink-0"], [1, "rounded-2xl", "border", "border-white/5", "p-6", "animate-pulse", 2, "background", "rgba(255,255,255,0.02)"], [1, "flex", "items-center", "gap-3", "mb-5"], [1, "w-8", "h-8", "bg-gray-800", "rounded-lg", "flex-shrink-0"], [1, "space-y-2"], [1, "h-4", "bg-gray-700", "rounded-lg", "w-32"], [1, "h-3", "bg-gray-800", "rounded", "w-48"], [1, "space-y-3"], [1, "flex", "justify-between", "items-center", "p-4", "rounded-xl", "border", "border-white/5", 2, "background", "rgba(255,255,255,0.02)"], [1, "h-4", "bg-gray-700", "rounded", "w-36"], [1, "h-3", "bg-gray-800", "rounded", "w-52"], [1, "w-11", "h-6", "bg-gray-700", "rounded-full", "flex-shrink-0"], [1, "max-w-2xl", "space-y-5", 3, "ngSubmit", "formGroup"], [1, "relative", "rounded-2xl", "border", "border-white/5", "overflow-hidden", 2, "background", "rgba(255,255,255,0.02)"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #3b82f6, #6366f1)"], [1, "p-6", "space-y-4"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(59,130,246,0.15)"], [1, "fas", "fa-bell", "text-blue-400"], [1, "flex-1"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "text-base", "font-bold", "text-white"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-bold", "border", "border-yellow-500/30", "text-yellow-400", 2, "background", "rgba(234,179,8,0.08)"], [1, "fas", "fa-clock", "text-[8px]"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "flex", "items-center", "justify-between", "gap-4", "p-4", "rounded-xl", "border", "cursor-pointer", "transition-all", "duration-200", "hover:-translate-y-0.5", "hover:shadow-md"], [1, "flex", "items-center", "gap-3", "flex-1"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0", "transition-all"], [1, "fas", "fa-envelope", "text-sm"], [1, "text-sm", "font-semibold"], [1, "flex-shrink-0"], ["id", "emailNotifications", "formControlName", "emailNotifications", "type", "checkbox", 1, "sr-only"], [1, "w-12", "h-6", "rounded-full", "relative", "transition-all", "duration-300", "cursor-pointer"], [1, "absolute", "top-0.5", "w-5", "h-5", "rounded-full", "shadow-lg", "transition-all", "duration-300"], [1, "fas", "fa-sms", "text-sm"], ["id", "smsNotifications", "formControlName", "smsNotifications", "type", "checkbox", 1, "sr-only"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #8b5cf6, #ec4899)"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(139,92,246,0.15)"], [1, "fas", "fa-palette", "text-violet-400"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-bold", "border", "border-violet-500/30", "text-violet-400", 2, "background", "rgba(139,92,246,0.08)"], ["type", "hidden", "formControlName", "theme"], [1, "grid", "grid-cols-3", "gap-3"], ["type", "button", 1, "relative", "p-4", "rounded-xl", "border", "text-center", "transition-all", "duration-200", "hover:-translate-y-0.5", "hover:shadow-lg", "active:scale-95", "group", 3, "click"], [1, "absolute", "top-2", "right-2", "w-4", "h-4", "rounded-full", "bg-violet-500", "flex", "items-center", "justify-center"], [1, "text-2xl", "mb-2"], [1, "text-xs", "font-bold"], [1, "text-[10px]", "text-gray-600", "mt-0.5"], ["type", "button", 1, "relative", "p-4", "rounded-xl", "border", "text-center", "transition-all", "duration-200", "hover:-translate-y-0.5", "hover:shadow-lg", "active:scale-95", 3, "click"], [1, "absolute", "top-0", "left-0", "w-full", "h-0.5", 2, "background", "linear-gradient(90deg, #10b981, #06b6d4)"], [1, "w-9", "h-9", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(16,185,129,0.15)"], [1, "fas", "fa-globe", "text-emerald-400"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-bold", "border", "border-emerald-500/30", "text-emerald-400", 2, "background", "rgba(16,185,129,0.08)"], ["type", "hidden", "formControlName", "language"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "button", 1, "relative", "flex", "items-center", "gap-3", "p-4", "rounded-xl", "border", "text-left", "transition-all", "duration-200", "hover:-translate-y-0.5", "hover:shadow-lg", "active:scale-95", 3, "click"], [1, "absolute", "top-2", "right-2", "w-4", "h-4", "rounded-full", "bg-emerald-500", "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "text-sm", "font-bold"], [1, "text-[10px]", "text-gray-600"], [1, "flex", "items-center", "gap-3", "px-4", "py-3.5", "rounded-xl", "border", "border-emerald-500/30", "text-emerald-400", "text-sm", "font-medium", 2, "background", "rgba(16,185,129,0.08)"], [1, "flex", "items-center", "justify-between", "pt-2"], [1, "text-xs", "text-gray-600", "hidden", "sm:flex", "items-center", "gap-1.5"], [1, "fas", "fa-lock"], ["type", "submit", 1, "inline-flex", "items-center", "gap-2.5", "px-7", "py-3", "rounded-xl", "text-sm", "font-bold", "text-white", "transition-all", "duration-200", "hover:shadow-lg", "hover:shadow-violet-900/30", "disabled:opacity-40", "disabled:cursor-not-allowed", "active:scale-95", 2, "background", "linear-gradient(135deg, #8b5cf6, #6366f1)", 3, "disabled"], [1, "fas", "fa-check", "text-white", "text-[8px]"], [1, "w-7", "h-7", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "rgba(16,185,129,0.15)"], [1, "fas", "fa-check-circle", "text-sm"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "fas", "fa-save"]], template: function MyPreferences_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Tercihlerim");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Bildirim, g\xF6r\xFCn\xFCm ve dil ayarlar\u0131n\u0131z\u0131 y\xF6netin");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, MyPreferences_Conditional_6_Template, 3, 1, "div", 4);
      \u0275\u0275conditionalCreate(7, MyPreferences_Conditional_7_Template, 3, 1, "div", 5)(8, MyPreferences_Conditional_8_Template, 127, 68, "form", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.apiError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoaded() ? 7 : 8);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyPreferences, [{
    type: Component,
    args: [{ selector: "app-my-preferences", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="p-6 md:p-8 space-y-6">

  <!-- Page Header -->
  <div class="pb-5 border-b border-white/5">
    <h2 class="text-2xl font-black text-white tracking-tight">Tercihlerim</h2>
    <p class="text-gray-500 text-sm mt-1">Bildirim, g\xF6r\xFCn\xFCm ve dil ayarlar\u0131n\u0131z\u0131 y\xF6netin</p>
  </div>

  <!-- API Y\xFCkleme Hatas\u0131 -->
  @if (apiError()) {
    <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-red-500/30 text-red-400 text-sm font-medium"
         style="background: rgba(239,68,68,0.08);">
      <i class="fas fa-exclamation-circle flex-shrink-0"></i> {{ apiError() }}
    </div>
  }

  @if (!isLoaded()) {
    <!-- Skeleton -->
    <div class="max-w-2xl space-y-5">
      @for (i of [1, 2, 3]; track i) {
        <div class="rounded-2xl border border-white/5 p-6 animate-pulse" style="background: rgba(255,255,255,0.02);">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 bg-gray-800 rounded-lg flex-shrink-0"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-700 rounded-lg w-32"></div>
              <div class="h-3 bg-gray-800 rounded w-48"></div>
            </div>
          </div>
          <div class="space-y-3">
            @for (j of [1, 2]; track j) {
              <div class="flex justify-between items-center p-4 rounded-xl border border-white/5"
                   style="background: rgba(255,255,255,0.02);">
                <div class="space-y-2">
                  <div class="h-4 bg-gray-700 rounded w-36"></div>
                  <div class="h-3 bg-gray-800 rounded w-52"></div>
                </div>
                <div class="w-11 h-6 bg-gray-700 rounded-full flex-shrink-0"></div>
              </div>
            }
          </div>
        </div>
      }
    </div>

  } @else {
    <form [formGroup]="preferencesForm" (ngSubmit)="savePreferences()" class="max-w-2xl space-y-5">

      <!-- \u2460 Bildirim Ayarlar\u0131 -->
      <div class="relative rounded-2xl border border-white/5 overflow-hidden"
           style="background: rgba(255,255,255,0.02);">
        <div class="absolute top-0 left-0 w-full h-0.5"
             style="background: linear-gradient(90deg, #3b82f6, #6366f1);"></div>

        <div class="p-6 space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style="background: rgba(59,130,246,0.15);">
              <i class="fas fa-bell text-blue-400"></i>
            </span>
            <div class="flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-base font-bold text-white">Bildirim Ayarlar\u0131</h3>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold
                             border border-yellow-500/30 text-yellow-400"
                      style="background: rgba(234,179,8,0.08);">
                  <i class="fas fa-clock text-[8px]"></i> Yak\u0131nda Aktif
                </span>
              </div>
              <p class="text-xs text-gray-500 mt-0.5">Tercihleriniz kaydedilir; bildirim sistemi entegrasyonu tamamland\u0131\u011F\u0131nda devreye girer</p>
            </div>
          </div>

          <!-- E-posta Toggle -->
          <label class="flex items-center justify-between gap-4 p-4 rounded-xl border cursor-pointer
                        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                 [class]="emailOn
                   ? 'border-blue-500/30 hover:border-blue-500/50'
                   : 'border-white/5 hover:border-white/10'"
                 [style]="emailOn ? 'background: rgba(59,130,246,0.05)' : 'background: rgba(255,255,255,0.02)'">
            <div class="flex items-center gap-3 flex-1">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                   [style]="emailOn ? 'background: rgba(59,130,246,0.15)' : 'background: rgba(255,255,255,0.04)'">
                <i class="fas fa-envelope text-sm" [class]="emailOn ? 'text-blue-400' : 'text-gray-600'"></i>
              </div>
              <div>
                <p class="text-sm font-semibold" [class]="emailOn ? 'text-white' : 'text-gray-400'">
                  E-posta Bildirimleri
                </p>
                <p class="text-xs text-gray-500 mt-0.5">Sipari\u015F g\xFCncellemeleri ve kampanyalar</p>
              </div>
            </div>
            <!-- Toggle Switch -->
            <div class="flex-shrink-0">
              <input id="emailNotifications" formControlName="emailNotifications"
                     type="checkbox" class="sr-only">
              <div class="w-12 h-6 rounded-full relative transition-all duration-300 cursor-pointer"
                   [style]="emailOn
                     ? 'background: #2563eb; box-shadow: 0 0 12px rgba(37,99,235,0.4)'
                     : 'background: rgba(255,255,255,0.08)'">
                <div class="absolute top-0.5 w-5 h-5 rounded-full shadow-lg transition-all duration-300"
                     [class]="emailOn ? 'bg-white left-6' : 'bg-gray-500 left-0.5'"></div>
              </div>
            </div>
          </label>

          <!-- SMS Toggle -->
          <label class="flex items-center justify-between gap-4 p-4 rounded-xl border cursor-pointer
                        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                 [class]="smsOn
                   ? 'border-blue-500/30 hover:border-blue-500/50'
                   : 'border-white/5 hover:border-white/10'"
                 [style]="smsOn ? 'background: rgba(59,130,246,0.05)' : 'background: rgba(255,255,255,0.02)'">
            <div class="flex items-center gap-3 flex-1">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                   [style]="smsOn ? 'background: rgba(59,130,246,0.15)' : 'background: rgba(255,255,255,0.04)'">
                <i class="fas fa-sms text-sm" [class]="smsOn ? 'text-blue-400' : 'text-gray-600'"></i>
              </div>
              <div>
                <p class="text-sm font-semibold" [class]="smsOn ? 'text-white' : 'text-gray-400'">
                  SMS Bildirimleri
                </p>
                <p class="text-xs text-gray-500 mt-0.5">Kargo durumu ve acil uyar\u0131lar</p>
              </div>
            </div>
            <div class="flex-shrink-0">
              <input id="smsNotifications" formControlName="smsNotifications"
                     type="checkbox" class="sr-only">
              <div class="w-12 h-6 rounded-full relative transition-all duration-300 cursor-pointer"
                   [style]="smsOn
                     ? 'background: #2563eb; box-shadow: 0 0 12px rgba(37,99,235,0.4)'
                     : 'background: rgba(255,255,255,0.08)'">
                <div class="absolute top-0.5 w-5 h-5 rounded-full shadow-lg transition-all duration-300"
                     [class]="smsOn ? 'bg-white left-6' : 'bg-gray-500 left-0.5'"></div>
              </div>
            </div>
          </label>
        </div>
      </div>

      <!-- \u2461 Tema Se\xE7imi -->
      <div class="relative rounded-2xl border border-white/5 overflow-hidden"
           style="background: rgba(255,255,255,0.02);">
        <div class="absolute top-0 left-0 w-full h-0.5"
             style="background: linear-gradient(90deg, #8b5cf6, #ec4899);"></div>

        <div class="p-6 space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style="background: rgba(139,92,246,0.15);">
              <i class="fas fa-palette text-violet-400"></i>
            </span>
            <div class="flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-base font-bold text-white">Tema Se\xE7imi</h3>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold
                             border border-violet-500/30 text-violet-400"
                      style="background: rgba(139,92,246,0.08);">
                  <i class="fas fa-clock text-[8px]"></i> Yak\u0131nda
                </span>
              </div>
              <p class="text-xs text-gray-500 mt-0.5">Tema tercihiniz kaydedilir; uygulama geneli tema deste\u011Fi yak\u0131nda gelecek</p>
            </div>
          </div>

          <!-- G\xF6rsel Tema Kartlar\u0131 -->
          <input type="hidden" formControlName="theme">
          <div class="grid grid-cols-3 gap-3">

            <!-- Light -->
            <button type="button" (click)="selectTheme('LIGHT')"
              class="relative p-4 rounded-xl border text-center transition-all duration-200
                     hover:-translate-y-0.5 hover:shadow-lg active:scale-95 group"
              [class]="theme === 'LIGHT'
                ? 'border-violet-500/50 bg-violet-500/10'
                : 'border-white/5 hover:border-white/15'"
              [style]="theme !== 'LIGHT' ? 'background: rgba(255,255,255,0.02)' : ''">
              @if (theme === 'LIGHT') {
                <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-violet-500 flex items-center justify-center">
                  <i class="fas fa-check text-white text-[8px]"></i>
                </div>
              }
              <div class="text-2xl mb-2">\u2600\uFE0F</div>
              <p class="text-xs font-bold" [class]="theme === 'LIGHT' ? 'text-violet-300' : 'text-gray-400'">A\xE7\u0131k</p>
              <p class="text-[10px] text-gray-600 mt-0.5">Light mode</p>
            </button>

            <!-- Dark -->
            <button type="button" (click)="selectTheme('DARK')"
              class="relative p-4 rounded-xl border text-center transition-all duration-200
                     hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              [class]="theme === 'DARK'
                ? 'border-violet-500/50 bg-violet-500/10'
                : 'border-white/5 hover:border-white/15'"
              [style]="theme !== 'DARK' ? 'background: rgba(255,255,255,0.02)' : ''">
              @if (theme === 'DARK') {
                <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-violet-500 flex items-center justify-center">
                  <i class="fas fa-check text-white text-[8px]"></i>
                </div>
              }
              <div class="text-2xl mb-2">\u{1F319}</div>
              <p class="text-xs font-bold" [class]="theme === 'DARK' ? 'text-violet-300' : 'text-gray-400'">Koyu</p>
              <p class="text-[10px] text-gray-600 mt-0.5">Dark mode</p>
            </button>

            <!-- System -->
            <button type="button" (click)="selectTheme('SYSTEM')"
              class="relative p-4 rounded-xl border text-center transition-all duration-200
                     hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              [class]="theme === 'SYSTEM'
                ? 'border-violet-500/50 bg-violet-500/10'
                : 'border-white/5 hover:border-white/15'"
              [style]="theme !== 'SYSTEM' ? 'background: rgba(255,255,255,0.02)' : ''">
              @if (theme === 'SYSTEM') {
                <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-violet-500 flex items-center justify-center">
                  <i class="fas fa-check text-white text-[8px]"></i>
                </div>
              }
              <div class="text-2xl mb-2">\u{1F4BB}</div>
              <p class="text-xs font-bold" [class]="theme === 'SYSTEM' ? 'text-violet-300' : 'text-gray-400'">Sistem</p>
              <p class="text-[10px] text-gray-600 mt-0.5">Auto</p>
            </button>
          </div>
        </div>
      </div>

      <!-- \u2462 Dil Se\xE7imi -->
      <div class="relative rounded-2xl border border-white/5 overflow-hidden"
           style="background: rgba(255,255,255,0.02);">
        <div class="absolute top-0 left-0 w-full h-0.5"
             style="background: linear-gradient(90deg, #10b981, #06b6d4);"></div>

        <div class="p-6 space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style="background: rgba(16,185,129,0.15);">
              <i class="fas fa-globe text-emerald-400"></i>
            </span>
            <div class="flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="text-base font-bold text-white">Dil Se\xE7imi</h3>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold
                             border border-emerald-500/30 text-emerald-400"
                      style="background: rgba(16,185,129,0.08);">
                  <i class="fas fa-clock text-[8px]"></i> Yak\u0131nda
                </span>
              </div>
              <p class="text-xs text-gray-500 mt-0.5">Dil tercihiniz kaydedilir; \xE7oklu dil deste\u011Fi yak\u0131nda eklenecek</p>
            </div>
          </div>

          <input type="hidden" formControlName="language">
          <div class="grid grid-cols-2 gap-3">

            <!-- T\xFCrk\xE7e -->
            <button type="button" (click)="selectLanguage('TR')"
              class="relative flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200
                     hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              [class]="language === 'TR'
                ? 'border-emerald-500/50 bg-emerald-500/8'
                : 'border-white/5 hover:border-white/15'"
              [style]="language !== 'TR' ? 'background: rgba(255,255,255,0.02)' : 'background: rgba(16,185,129,0.06)'">
              @if (language === 'TR') {
                <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <i class="fas fa-check text-white text-[8px]"></i>
                </div>
              }
              <span class="text-2xl">\u{1F1F9}\u{1F1F7}</span>
              <div>
                <p class="text-sm font-bold" [class]="language === 'TR' ? 'text-emerald-300' : 'text-gray-400'">T\xFCrk\xE7e</p>
                <p class="text-[10px] text-gray-600">Turkish</p>
              </div>
            </button>

            <!-- English -->
            <button type="button" (click)="selectLanguage('EN')"
              class="relative flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200
                     hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              [class]="language === 'EN'
                ? 'border-emerald-500/50 bg-emerald-500/8'
                : 'border-white/5 hover:border-white/15'"
              [style]="language !== 'EN' ? 'background: rgba(255,255,255,0.02)' : 'background: rgba(16,185,129,0.06)'">
              @if (language === 'EN') {
                <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <i class="fas fa-check text-white text-[8px]"></i>
                </div>
              }
              <span class="text-2xl">\u{1F1EC}\u{1F1E7}</span>
              <div>
                <p class="text-sm font-bold" [class]="language === 'EN' ? 'text-emerald-300' : 'text-gray-400'">English</p>
                <p class="text-[10px] text-gray-600">\u0130ngilizce</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Feedback -->
      @if (saveSuccess()) {
        <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-emerald-500/30 text-emerald-400 text-sm font-medium"
             style="background: rgba(16,185,129,0.08);">
          <span class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style="background: rgba(16,185,129,0.15);">
            <i class="fas fa-check-circle text-sm"></i>
          </span>
          Tercihleriniz ba\u015Far\u0131yla kaydedildi!
        </div>
      }
      @if (saveError()) {
        <div class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-red-500/30 text-red-400 text-sm font-medium"
             style="background: rgba(239,68,68,0.08);">
          <i class="fas fa-exclamation-circle flex-shrink-0"></i> {{ saveError() }}
        </div>
      }

      <!-- Submit -->
      <div class="flex items-center justify-between pt-2">
        <p class="text-xs text-gray-600 hidden sm:flex items-center gap-1.5">
          <i class="fas fa-lock"></i> Ayarlar\u0131n\u0131z g\xFCvenle saklanmaktad\u0131r.
        </p>
        <button type="submit"
          [disabled]="isSaving() || !preferencesForm.dirty"
          class="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold text-white
                 transition-all duration-200 hover:shadow-lg hover:shadow-violet-900/30
                 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
          style="background: linear-gradient(135deg, #8b5cf6, #6366f1);">
          @if (isSaving()) {
            <i class="fas fa-circle-notch fa-spin"></i> Kaydediliyor...
          } @else {
            <i class="fas fa-save"></i> De\u011Fi\u015Fiklikleri Kaydet
          }
        </button>
      </div>

    </form>
  }

</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyPreferences, { className: "MyPreferences", filePath: "app/features/individual/profile/my-preferences/my-preferences.ts", lineNumber: 15 });
})();
export {
  MyPreferences
};
//# sourceMappingURL=chunk-33UMZC5X.js.map
