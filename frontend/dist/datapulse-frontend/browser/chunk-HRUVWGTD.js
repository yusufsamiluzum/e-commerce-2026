import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MKAKFE2K.js";
import {
  CartService
} from "./chunk-BONAVTPV.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-N6CICK2R.js";
import "./chunk-27YRKIWA.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  NgClass,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgZone,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-OBD62CNA.js";
import "./chunk-H2SRQSE4.js";

// node_modules/@stripe/stripe-js/dist/index.mjs
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
var RELEASE_TRAIN = "dahlia";
var runtimeVersionToUrlVersion = function runtimeVersionToUrlVersion2(version) {
  return version === 3 ? "v3" : version;
};
var ORIGIN = "https://js.stripe.com";
var STRIPE_JS_URL = "".concat(ORIGIN, "/").concat(RELEASE_TRAIN, "/stripe.js");
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var STRIPE_JS_URL_REGEX = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
var isStripeJSURL = function isStripeJSURL2(url) {
  return V3_URL_REGEX.test(url) || STRIPE_JS_URL_REGEX.test(url);
};
var findScript = function findScript2() {
  var scripts = document.querySelectorAll('script[src^="'.concat(ORIGIN, '"]'));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (!isStripeJSURL(script.src)) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript = function injectScript2(params) {
  var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
  var script = document.createElement("script");
  script.src = "".concat(STRIPE_JS_URL).concat(queryString);
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  }
  headOrBody.appendChild(script);
  return script;
};
var registerWrapper = function registerWrapper2(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }
  stripe._registerWrapper({
    name: "stripe-js",
    version: "9.1.0",
    startTime
  });
};
var stripePromise$1 = null;
var onErrorListener = null;
var onLoadListener = null;
var onError = function onError2(reject) {
  return function(cause) {
    reject(new Error("Failed to load Stripe.js", {
      cause
    }));
  };
};
var onLoad = function onLoad2(resolve, reject) {
  return function() {
    if (window.Stripe) {
      resolve(window.Stripe);
    } else {
      reject(new Error("Stripe.js not available"));
    }
  };
};
var loadScript = function loadScript2(params) {
  if (stripePromise$1 !== null) {
    return stripePromise$1;
  }
  stripePromise$1 = new Promise(function(resolve, reject) {
    if (typeof window === "undefined" || typeof document === "undefined") {
      resolve(null);
      return;
    }
    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }
    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }
    try {
      var script = findScript();
      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      } else if (script && onLoadListener !== null && onErrorListener !== null) {
        var _script$parentNode;
        script.removeEventListener("load", onLoadListener);
        script.removeEventListener("error", onErrorListener);
        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
        script = injectScript(params);
      }
      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener("load", onLoadListener);
      script.addEventListener("error", onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise$1["catch"](function(error) {
    stripePromise$1 = null;
    return Promise.reject(error);
  });
};
var initStripe = function initStripe2(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }
  var pk = args[0];
  if (typeof pk !== "string") {
    throw new Error("Expected publishable key to be of type string, got type ".concat(_typeof(pk), " instead."));
  }
  var isTestKey = pk.match(/^pk_test/);
  var version = runtimeVersionToUrlVersion(maybeStripe.version);
  var expectedVersion = RELEASE_TRAIN;
  if (isTestKey && version !== expectedVersion) {
    console.warn("Stripe.js@".concat(version, " was loaded on the page, but @stripe/stripe-js@").concat("9.1.0", " expected Stripe.js@").concat(expectedVersion, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
  }
  var stripe = maybeStripe.apply(void 0, args);
  registerWrapper(stripe, startTime);
  return stripe;
};
var stripePromise;
var loadCalled = false;
var getStripePromise = function getStripePromise2() {
  if (stripePromise) {
    return stripePromise;
  }
  stripePromise = loadScript(null)["catch"](function(error) {
    stripePromise = null;
    return Promise.reject(error);
  });
  return stripePromise;
};
Promise.resolve().then(function() {
  return getStripePromise();
})["catch"](function(error) {
  if (!loadCalled) {
    console.warn(error);
  }
});
var loadStripe = function loadStripe2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  loadCalled = true;
  var startTime = Date.now();
  return getStripePromise().then(function(maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

// src/app/features/checkout/components/stripe-payment/stripe-payment.ts
var _c0 = ["cardElement"];
function StripePaymentComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var StripePaymentComponent = class _StripePaymentComponent {
  cardElementRef;
  cardError = new EventEmitter();
  cardReady = new EventEmitter();
  stripePromise = loadStripe("pk_test_51TLNMOLsZ27UXGYbbBFI9uTvdsC6SdmwReuqGAPhH6FHqyI3NFbrCV38IiViZ9hr81WcVR3sknyVdVCeWOV5gMME00Fdta8LHT");
  // Will inject real key later
  stripe;
  elements;
  card;
  errorMessage = null;
  async ngAfterViewInit() {
    this.stripe = await this.stripePromise;
    if (this.stripe) {
      this.elements = this.stripe.elements();
      this.card = this.elements.create("card", {
        style: {
          base: {
            iconColor: "#3b82f6",
            color: "#1f2937",
            fontWeight: "500",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            "::placeholder": { color: "#9ca3af" }
          },
          invalid: { iconColor: "#ef4444", color: "#ef4444" }
        }
      });
      this.card.mount(this.cardElementRef.nativeElement);
      this.card.on("change", (event) => {
        this.errorMessage = event.error ? event.error.message : null;
        this.cardError.emit(this.errorMessage);
      });
      this.cardReady.emit(this.card);
    }
  }
  async confirmPayment(clientSecret, billingDetails) {
    if (!this.stripe || !this.card)
      return { error: { message: "Stripe not initialized" } };
    return this.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.card,
        billing_details: billingDetails
      }
    });
  }
  static \u0275fac = function StripePaymentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripePaymentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StripePaymentComponent, selectors: [["app-stripe-payment"]], viewQuery: function StripePaymentComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cardElementRef = _t.first);
    }
  }, outputs: { cardError: "cardError", cardReady: "cardReady" }, decls: 10, vars: 1, consts: [["cardElement", ""], [1, "mt-4"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "p-3", "border", "border-gray-300", "rounded-md", "shadow-sm", "bg-white"], [1, "mt-2", "text-xs", "text-gray-500", "flex", "items-center"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", "text-green-500", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["class", "mt-2 text-sm text-red-600", 4, "ngIf"], [1, "mt-2", "text-sm", "text-red-600"]], template: function StripePaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "label", 2);
      \u0275\u0275text(2, "Card Details");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "div", 3, 0);
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Payments are 100% secure and PCI compliant via Stripe. ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, StripePaymentComponent_p_9_Template, 2, 1, "p", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripePaymentComponent, [{
    type: Component,
    args: [{ selector: "app-stripe-payment", standalone: true, imports: [CommonModule], template: '<div class="mt-4">\n  <label class="block text-sm font-medium text-gray-700 mb-2">Card Details</label>\n  <div class="p-3 border border-gray-300 rounded-md shadow-sm bg-white" #cardElement></div>\n  <p class="mt-2 text-xs text-gray-500 flex items-center">\n    <svg class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>\n    </svg>\n    Payments are 100% secure and PCI compliant via Stripe.\n  </p>\n  <p *ngIf="errorMessage" class="mt-2 text-sm text-red-600">{{errorMessage}}</p>\n</div>\n' }]
  }], null, { cardElementRef: [{
    type: ViewChild,
    args: ["cardElement"]
  }], cardError: [{
    type: Output
  }], cardReady: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StripePaymentComponent, { className: "StripePaymentComponent", filePath: "app/features/checkout/components/stripe-payment/stripe-payment.ts", lineNumber: 11 });
})();

// src/app/features/checkout/components/paypal-payment/paypal-payment.ts
var PaypalPaymentComponent = class _PaypalPaymentComponent {
  static \u0275fac = function PaypalPaymentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaypalPaymentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaypalPaymentComponent, selectors: [["app-paypal-payment"]], decls: 6, vars: 0, consts: [[1, "mt-4", "p-4", "bg-blue-50", "text-blue-800", "rounded-md", "border", "border-blue-200", "text-center"], [1, "flex", "flex-col", "items-center"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "h-10", "w-10", "mb-2"], ["d", "M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.078.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"]], template: function PaypalPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(2, "svg", 2);
      \u0275\u0275domElement(3, "path", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(4, "span");
      \u0275\u0275text(5, "You will be redirected to PayPal to complete your purchase securely.");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaypalPaymentComponent, [{
    type: Component,
    args: [{ selector: "app-paypal-payment", standalone: true, template: '<div class="mt-4 p-4 bg-blue-50 text-blue-800 rounded-md border border-blue-200 text-center">\n  <div class="flex flex-col items-center">\n    <svg class="h-10 w-10 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.078.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/></svg>\n    <span>You will be redirected to PayPal to complete your purchase securely.</span>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaypalPaymentComponent, { className: "PaypalPaymentComponent", filePath: "app/features/checkout/components/paypal-payment/paypal-payment.ts", lineNumber: 8 });
})();

// src/app/core/services/payment.service.ts
var PaymentService = class _PaymentService {
  http = inject(HttpClient);
  // Optional Strategy interface string for expandability
  backendUrl = "http://localhost:8080/api/payments";
  createPaymentIntent(amount) {
    return this.http.post(`${this.backendUrl}/create-intent`, { amount });
  }
  static \u0275fac = function PaymentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/checkout/pages/checkout/checkout.ts
var _c02 = (a0) => ({ "border-blue-500 ring-1 ring-blue-500": a0 });
var _forTrack0 = ($index, $item) => $item.product.id;
function CheckoutComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "h3", 41);
    \u0275\u0275text(4, "Payment Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.paymentError);
  }
}
function CheckoutComponent_app_stripe_payment_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-stripe-payment", 43);
    \u0275\u0275listener("cardError", function CheckoutComponent_app_stripe_payment_42_Template_app_stripe_payment_cardError_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCardError($event));
    });
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_app_paypal_payment_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-paypal-payment");
  }
}
function CheckoutComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " This strategy interface is planned but not currently active. ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29)(1, "div", 45);
    \u0275\u0275element(2, "img", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "div")(5, "div", 48)(6, "h3", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r3.product.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r3.product.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", (item_r3.product.price * item_r3.quantity).toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Qty ", item_r3.quantity);
  }
}
var CheckoutComponent = class _CheckoutComponent {
  stripePaymentComp;
  cartService = inject(CartService);
  paymentService = inject(PaymentService);
  fb = inject(FormBuilder);
  router = inject(Router);
  http = inject(HttpClient);
  ngZone = inject(NgZone);
  checkoutForm;
  isProcessing = false;
  paymentError = null;
  selectedPaymentMethod = "stripe";
  // Strategy switch (stripe, paypal, mock)
  ngOnInit() {
    this.checkoutForm = this.fb.group({
      fullName: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      zipCode: ["", [Validators.required, Validators.pattern("[0-9]+")]]
    });
  }
  changePaymentMethod(method) {
    this.selectedPaymentMethod = method;
    this.paymentError = null;
  }
  onCardError(error) {
    this.paymentError = error;
  }
  async onSubmit() {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }
    this.isProcessing = true;
    this.paymentError = null;
    try {
      if (this.selectedPaymentMethod === "stripe") {
        const amount = this.cartService.totalPrice();
        this.paymentService.createPaymentIntent(amount).subscribe({
          next: async (res) => {
            const formData = this.checkoutForm.value;
            const confirmResult = await this.stripePaymentComp.confirmPayment(res.clientSecret, {
              name: formData.fullName,
              address: { city: formData.city, postal_code: formData.zipCode, line1: formData.address }
            });
            this.ngZone.run(() => {
              if (confirmResult.error) {
                this.paymentError = confirmResult.error.message;
                this.isProcessing = false;
              } else {
                this.saveOrderAndComplete("stripe");
              }
            });
          },
          error: (err) => {
            this.paymentError = "Failed to contact Payment Server. Check Backend.";
            this.isProcessing = false;
          }
        });
      } else {
        setTimeout(() => {
          this.saveOrderAndComplete(this.selectedPaymentMethod);
        }, 1500);
      }
    } catch (err) {
      this.paymentError = err.message;
      this.isProcessing = false;
    }
  }
  saveOrderAndComplete(method) {
    const orderPayload = {
      paymentMethod: method,
      items: this.cartService.cartItems().map((ci) => ({ productId: ci.product.id, quantity: ci.quantity })),
      address: {
        fullName: this.checkoutForm.value.fullName,
        line1: this.checkoutForm.value.address,
        city: this.checkoutForm.value.city,
        zipCode: this.checkoutForm.value.zipCode
      }
    };
    this.http.post("http://localhost:8080/api/orders", orderPayload).subscribe({
      next: (res) => {
        this.isProcessing = false;
        this.cartService.clearCart();
        this.router.navigate(["/checkout/success"]);
      },
      error: (err) => {
        this.paymentError = "Order saved failed: " + err.message;
        this.isProcessing = false;
      }
    });
  }
  static \u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], viewQuery: function CheckoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(StripePaymentComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripePaymentComp = _t.first);
    }
  }, decls: 71, vars: 18, consts: [[1, "bg-gray-50", "min-h-screen", "py-12"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "mb-8"], [1, "text-3xl", "font-extrabold", "text-gray-900", "tracking-tight"], [1, "mt-2", "text-sm", "text-gray-500"], ["class", "mb-8 bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm animate-fade-in", 4, "ngIf"], [1, "flex", "flex-col", "lg:flex-row", "gap-8"], [1, "lg:w-2/3"], [1, "bg-white", "shadow-sm", "rounded-lg", "border", "border-gray-100", "p-6", "mb-6"], [1, "text-xl", "font-semibold", "text-gray-900", "mb-6"], [1, "space-y-4", 3, "formGroup"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "fullName", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "py-2", "px-3", "border"], ["type", "text", "formControlName", "address", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "py-2", "px-3", "border"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "text", "formControlName", "city", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "py-2", "px-3", "border"], ["type", "text", "formControlName", "zipCode", 1, "mt-1", "block", "w-full", "rounded-md", "border-gray-300", "py-2", "px-3", "border"], [1, "bg-white", "shadow-sm", "rounded-lg", "border", "border-gray-100", "p-6"], [1, "flex", "space-x-4", "mb-6"], [1, "flex-1", "py-3", "px-4", "border", "rounded-md", "shadow-sm", "text-sm", "font-medium", "hover:bg-gray-50", 3, "click", "ngClass"], [3, "ngSwitch"], [3, "cardError", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "mt-4 p-4 bg-yellow-50 text-yellow-800 rounded-md border border-yellow-200", 4, "ngSwitchDefault"], [1, "lg:w-1/3"], [1, "bg-gray-100", "rounded-lg", "p-6", "sticky", "top-6"], [1, "text-xl", "font-semibold", "text-gray-900", "mb-4"], [1, "flow-root", "mb-6"], [1, "-my-4", "divide-y", "divide-gray-200"], [1, "py-4", "flex"], [1, "border-t", "border-gray-200", "pt-4", "space-y-2"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "text-gray-600"], [1, "font-medium", "text-gray-900"], [1, "flex", "items-center", "justify-between", "text-base", "font-bold", "pt-4", "border-t", "border-gray-200", "mt-2"], [1, "text-gray-900"], [1, "text-blue-600"], [1, "mt-8", "w-full", "bg-blue-600", "border", "border-transparent", "rounded-md", "py-3", "px-4", "text-white", "hover:bg-blue-700", "disabled:opacity-50", "transition-all", "flex", "justify-center", "items-center", 3, "click", "disabled"], [1, "mb-8", "bg-red-50", "border-l-4", "border-red-500", "p-4", "rounded-md", "shadow-sm", "animate-fade-in"], [1, "flex", "items-center"], [1, "ml-3"], [1, "text-sm", "font-medium", "text-red-800"], [1, "mt-1", "text-sm", "text-red-700"], [3, "cardError"], [1, "mt-4", "p-4", "bg-yellow-50", "text-yellow-800", "rounded-md", "border", "border-yellow-200"], [1, "flex-shrink-0", "w-16", "h-16", "border", "border-gray-200", "rounded-md", "overflow-hidden", "bg-white"], [1, "w-full", "h-full", "object-center", "object-cover", 3, "src", "alt"], [1, "ml-4", "flex-1", "flex", "flex-col"], [1, "flex", "justify-between", "text-sm", "font-medium", "text-gray-900"], [1, "truncate", "w-32"], [1, "ml-4"], [1, "mt-1", "text-sm", "text-gray-500"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Complete your purchase using our secure payment gateway.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, CheckoutComponent_div_7_Template, 7, 1, "div", 5);
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h2", 9);
      \u0275\u0275text(12, "Shipping Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "form", 10)(14, "div")(15, "label", 11);
      \u0275\u0275text(16, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div")(19, "label", 11);
      \u0275\u0275text(20, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "div")(24, "label", 11);
      \u0275\u0275text(25, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div")(28, "label", 11);
      \u0275\u0275text(29, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 17)(32, "h2", 9);
      \u0275\u0275text(33, "Payment Strategy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 18)(35, "button", 19);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_35_listener() {
        return ctx.changePaymentMethod("stripe");
      });
      \u0275\u0275text(36, "Stripe (Card)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 19);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_37_listener() {
        return ctx.changePaymentMethod("paypal");
      });
      \u0275\u0275text(38, "PayPal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 19);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_39_listener() {
        return ctx.changePaymentMethod("crypto");
      });
      \u0275\u0275text(40, "Crypto (Coming Soon)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementContainerStart(41, 20);
      \u0275\u0275template(42, CheckoutComponent_app_stripe_payment_42_Template, 1, 0, "app-stripe-payment", 21)(43, CheckoutComponent_app_paypal_payment_43_Template, 1, 0, "app-paypal-payment", 22)(44, CheckoutComponent_div_44_Template, 2, 0, "div", 23);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 24)(46, "div", 25)(47, "h2", 26);
      \u0275\u0275text(48, "Order Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 27)(50, "ul", 28);
      \u0275\u0275repeaterCreate(51, CheckoutComponent_For_52_Template, 12, 5, "li", 29, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 30)(54, "div", 31)(55, "p", 32);
      \u0275\u0275text(56, "Subtotal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 33);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 31)(60, "p", 32);
      \u0275\u0275text(61, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p", 33);
      \u0275\u0275text(63, "Free");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 34)(65, "p", 35);
      \u0275\u0275text(66, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 36);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "button", 37);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_69_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.paymentError);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.checkoutForm);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c02, ctx.selectedPaymentMethod === "stripe"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c02, ctx.selectedPaymentMethod === "paypal"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c02, ctx.selectedPaymentMethod === "crypto"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngSwitch", ctx.selectedPaymentMethod);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "stripe");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "paypal");
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.cartService.cartItems());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("$", ctx.cartService.totalPrice().toFixed(2));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("$", ctx.cartService.totalPrice().toFixed(2));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isProcessing || ctx.cartService.cartItems().length === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isProcessing ? "Processing..." : "Pay $" + ctx.cartService.totalPrice().toFixed(2), " ");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, StripePaymentComponent, PaypalPaymentComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [CommonModule, ReactiveFormsModule, StripePaymentComponent, PaypalPaymentComponent], template: `<div class="bg-gray-50 min-h-screen py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8">
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Checkout</h1>
      <p class="mt-2 text-sm text-gray-500">Complete your purchase using our secure payment gateway.</p>
    </div>

    <!-- MAIN ALERT BOX FOR PAYMENT ERRORS -->
    <div *ngIf="paymentError" class="mb-8 bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm animate-fade-in">
      <div class="flex items-center">
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">Payment Failed</h3>
          <p class="mt-1 text-sm text-red-700">{{ paymentError }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- LEFT COLUMN -->
      <div class="lg:w-2/3">
        <div class="bg-white shadow-sm rounded-lg border border-gray-100 p-6 mb-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Shipping Address</h2>
          <form [formGroup]="checkoutForm" class="space-y-4">
            <!-- Form fields omitted for brevity but they are handled by checkoutForm group -->
            <div>
              <label class="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" formControlName="fullName" class="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" formControlName="address" class="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border">
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                 <label class="block text-sm font-medium text-gray-700">City</label>
                 <input type="text" formControlName="city" class="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border">
              </div>
              <div>
                 <label class="block text-sm font-medium text-gray-700">Zip</label>
                 <input type="text" formControlName="zipCode" class="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border">
              </div>
            </div>
          </form>
        </div>

        <div class="bg-white shadow-sm rounded-lg border border-gray-100 p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Payment Strategy</h2>

          <div class="flex space-x-4 mb-6">
            <button (click)="changePaymentMethod('stripe')" [ngClass]="{'border-blue-500 ring-1 ring-blue-500': selectedPaymentMethod === 'stripe'}" class="flex-1 py-3 px-4 border rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">Stripe (Card)</button>
            <button (click)="changePaymentMethod('paypal')" [ngClass]="{'border-blue-500 ring-1 ring-blue-500': selectedPaymentMethod === 'paypal'}" class="flex-1 py-3 px-4 border rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">PayPal</button>
            <button (click)="changePaymentMethod('crypto')" [ngClass]="{'border-blue-500 ring-1 ring-blue-500': selectedPaymentMethod === 'crypto'}" class="flex-1 py-3 px-4 border rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">Crypto (Coming Soon)</button>
          </div>

          <!-- ANGULAR STRATEGY DESIGN PATTERN VIA ngSwitch -->
          <ng-container [ngSwitch]="selectedPaymentMethod">
            <app-stripe-payment *ngSwitchCase="'stripe'" (cardError)="onCardError($event)" />
            <app-paypal-payment *ngSwitchCase="'paypal'" />
            <div *ngSwitchDefault class="mt-4 p-4 bg-yellow-50 text-yellow-800 rounded-md border border-yellow-200">
               This strategy interface is planned but not currently active.
            </div>
          </ng-container>

        </div>
      </div>

      <!-- RIGHT COLUMN: Order Summary -->
      <div class="lg:w-1/3">
        <div class="bg-gray-100 rounded-lg p-6 sticky top-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

          <div class="flow-root mb-6">
            <ul class="-my-4 divide-y divide-gray-200">
              @for (item of cartService.cartItems(); track item.product.id) {
                <li class="py-4 flex">
                  <div class="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden bg-white">
                    <img [src]="item.product.imageUrl" [alt]="item.product.name" class="w-full h-full object-center object-cover">
                  </div>
                  <div class="ml-4 flex-1 flex flex-col">
                    <div>
                      <div class="flex justify-between text-sm font-medium text-gray-900">
                        <h3 class="truncate w-32">{{ item.product.name }}</h3>
                        <p class="ml-4">\${{ (item.product.price * item.quantity).toFixed(2) }}</p>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">Qty {{ item.quantity }}</p>
                    </div>
                  </div>
                </li>
              }
            </ul>
          </div>

          <div class="border-t border-gray-200 pt-4 space-y-2">
            <div class="flex items-center justify-between text-sm">
              <p class="text-gray-600">Subtotal</p>
              <p class="font-medium text-gray-900">\${{ cartService.totalPrice().toFixed(2) }}</p>
            </div>
            <div class="flex items-center justify-between text-sm">
              <p class="text-gray-600">Shipping</p>
              <p class="font-medium text-gray-900">Free</p>
            </div>
            <div class="flex items-center justify-between text-base font-bold pt-4 border-t border-gray-200 mt-2">
              <p class="text-gray-900">Total</p>
              <p class="text-blue-600">\${{ cartService.totalPrice().toFixed(2) }}</p>
            </div>
          </div>

          <button (click)="onSubmit()" [disabled]="isProcessing || cartService.cartItems().length === 0" class="mt-8 w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-white hover:bg-blue-700 disabled:opacity-50 transition-all flex justify-center items-center">
             {{ isProcessing ? 'Processing...' : 'Pay $' + cartService.totalPrice().toFixed(2) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
` }]
  }], null, { stripePaymentComp: [{
    type: ViewChild,
    args: [StripePaymentComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "app/features/checkout/pages/checkout/checkout.ts", lineNumber: 17 });
})();

// src/app/features/checkout/pages/success/success.ts
var CheckoutSuccessComponent = class _CheckoutSuccessComponent {
  static \u0275fac = function CheckoutSuccessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutSuccessComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutSuccessComponent, selectors: [["app-checkout-success"]], decls: 10, vars: 0, consts: [[1, "container", "mx-auto", "px-4", "py-16", "max-w-2xl", "text-center"], [1, "w-24", "h-24", "bg-green-100", "text-green-500", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-6"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-12", "w-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-3xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-lg", "text-gray-600", "mb-8"], ["routerLink", "/profile/orders", 1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-medium", "py-3", "px-8", "rounded-lg", "shadow-sm", "transition-colors", "inline-block"]], template: function CheckoutSuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "h1", 4);
      \u0275\u0275text(5, "Payment Successful!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Thank you for your purchase. Your order has been placed and will be processed shortly.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 6);
      \u0275\u0275text(9, " View Order History ");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutSuccessComponent, [{
    type: Component,
    args: [{
      selector: "app-checkout-success",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    <div class="container mx-auto px-4 py-16 max-w-2xl text-center">
      <div class="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
      <p class="text-lg text-gray-600 mb-8">Thank you for your purchase. Your order has been placed and will be processed shortly.</p>
      
      <a routerLink="/profile/orders" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-sm transition-colors inline-block">
        View Order History
      </a>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutSuccessComponent, { className: "CheckoutSuccessComponent", filePath: "app/features/checkout/pages/success/success.ts", lineNumber: 25 });
})();

// src/app/features/checkout/checkout-routing-module.ts
var routes = [
  { path: "", component: CheckoutComponent },
  { path: "success", component: CheckoutSuccessComponent }
];
var CheckoutRoutingModule = class _CheckoutRoutingModule {
  static \u0275fac = function CheckoutRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CheckoutRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/checkout/checkout-module.ts
var CheckoutModule = class _CheckoutModule {
  static \u0275fac = function CheckoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CheckoutModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    CheckoutRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        CheckoutRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  CheckoutModule
};
//# sourceMappingURL=chunk-HRUVWGTD.js.map
