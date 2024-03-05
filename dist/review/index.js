(() => {
  "use strict";
  const e = {
      userIsRegistered: "/api/user/is-registered",
      register: "/api/register",
      login: "/api/login",
      userFindPasswordEmail: "/api/user/find-password-email",
      userResetPassword: "/api/user/reset-password",
      user: "/api/user",
      userChangePassword: "/api/user/change-password",
      area: "/api/area",
      address: "/api/address",
      addressList: "/api/address/list",
      addressDetail: "/api/address/detail",
      pointTotal: "/api/point/total",
      pointList: "/api/point/list",
      wish: "/api/wish",
      searchRecordQty: "/api/search/record-qty",
      review: "/api/review",
      userReview: "/api/user/review",
      userLikeReview: "/api/user/like/review",
      reviewLike: "/api/review/like",
      reviewUnlike: "/api/review/unlike",
      wishCheck: "/api/wish/check",
      product: "/api/product",
      cart: "/api/cart",
      cartMiniList: "/api/cart/mini-list",
      cartQty: "/api/cart/qty",
      cartSelectProduct: "/api/cart/select-product",
      cartRecommendProduct: "/api/cart/recommend-product",
      logout: "/api/logout",
      subscriber: "/api/subscriber",
      upload: "/api/upload",
      checkout: "/api/checkout",
      order: "/api/order",
      orderCancel: "/api/order/cancel",
      keyword: "/api/keyword",
      cartBuyNow: "/api/cart/buy-now",
      collections: "/api/collections",
      arrivalReminder: "/api/arrival-reminder",
      tips: "/api/tips",
      channelCurrentLanguage: "/api/channel/current-language",
      channelCurrentCurrency: "/api/channel/current-currency",
      affiliateActivityList: "/api/affiliate/activity/list",
      affiliateOrderList: "/api/affiliate/order/list",
      affiliateUserSubordinate: "/api/affiliate/user/subordinate",
      affiliateBankList: "/api/affiliate/bank/list",
      affiliateWithdrawList: "/api/affiliate/withdraw/list",
      affiliateWithdrawAdd: "/api/affiliate/withdraw/add",
      affiliateUserDetail: "/api/affiliate/user/detail",
      affiliateRuleDetail: "/api/affiliate/rule/detail",
      affiliateUserAdd: "/api/affiliate/user/add",
      affiliateWithdrawCancel: "/api/affiliate/withdraw/cancel",
      affiliateActivityDetail: "/api/affiliate/activity/detail",
      affiliateActivityAttend: "/api/affiliate/activity/attend",
      affiliateCashflowList: "/api/affiliate/cash-flow/list",
      affiliateUserAuditStatus: "/api/affiliate/user/audit-status",
      affiliateSettingDetail: "/api/affiliate/setting/detail",
      affiliateWithdrawBalance: "/api/affiliate/withdraw/balance",
    },
    t = {
      isNegative: (e) => e < 0,
      isZero: (e) => 0 === e,
      isPositive: (e) => e > 0,
      getPrecision(e) {
        const t = String(e).split(".");
        return t[1] ? t[1].length : 0;
      },
      rounding(e, t) {
        const a = this.getPrecision(e),
          i = this.getPrecision(t),
          r = Math.max(a, i),
          n = Math.pow(10, r),
          s = e * n,
          o = t * n;
        return (
          !!this.isZero(this.mod(s, o)) || this.multiple(o, this.mod(s, o)) < 2
        );
      },
      multiple(e, t) {
        return parseInt(Math.abs(this.devide(e, t)));
      },
      mod: (e, t) => e % t,
      add: (e, t) => e + t,
      minus: (e, t) => e - t,
      multiply: (e, t) => e * t,
      devide: (e, t) => e / t,
      ceil(e, t, a) {
        return this.isZero(this.mod(e, t))
          ? e.toFixed(a)
          : this.isNegative(e)
          ? -this.multiply(t, this.multiple(e, t)).toFixed(a)
          : this.isPositive(e)
          ? this.multiply(t, this.multiple(e, t) + 1).toFixed(a)
          : void 0;
      },
      floor(e, t, a) {
        return this.isZero(this.mod(e, t))
          ? e.toFixed(a)
          : this.isNegative(e)
          ? -this.multiply(t, this.multiple(e, t) + 1).toFixed(a)
          : this.isPositive(e)
          ? this.multiply(t, this.multiple(e, t)).toFixed(a)
          : void 0;
      },
      round(e, t, a) {
        return this.isZero(this.mod(e, t))
          ? e.toFixed(a)
          : this.isNegative(e)
          ? this.rounding(e, t)
            ? -this.multiply(t, this.multiple(e, t)).toFixed(a)
            : -this.multiply(t, this.multiple(e, t) + 1).toFixed(a)
          : this.isPositive(e)
          ? this.rounding(e, t)
            ? this.multiply(t, this.multiple(e, t)).toFixed(a)
            : this.multiply(t, this.multiple(e, t) + 1).toFixed(a)
          : void 0;
      },
    },
    a = axios.create();
  a.interceptors.request.use(function (e) {
    const t = localStorage.getItem("token");
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  }),
    a.interceptors.response.use(
      function (t) {
        const a = t.config.url;
        return -1e3 !== t.data.code ||
          [
            e.wish,
            e.userLikeReview,
            e.reviewLike,
            e.reviewUnlike,
            e.arrivalReminder,
            e.affiliateUserAuditStatus,
          ].includes(a)
          ? t.data
          : (localStorage.removeItem("token"),
            localStorage.removeItem("name"),
            void (location.href = "/auth/sign-in"));
      },
      function (e) {
        return Promise.reject(e);
      }
    );
  const i = a,
    r = {
      formatPrice() {
        const e = document.getElementsByClassName("format_price"),
          t = JS_CURRENCY_GROUP[JS_DEFAULT_CURRENCY];
        for (let a = 0; a < e.length; a++) {
          const i = e[a].getAttribute("data-price");
          e[a].innerHTML = `${t.symbol}${this.formatNumber(i)}`;
        }
      },
      formatNumber(e, a = JS_DEFAULT_CURRENCY) {
        const i = JS_CURRENCY_GROUP[a];
        let r = i.precision;
        switch (
          (["/cart", "/checkout"].includes(location.pathname) &&
            (r = i.calc_precision),
          i.round_type_name)
        ) {
          case "round":
            e = t.round(e * i.exchange_rate, i.unit_amount, r);
            break;
          case "ceil":
            e = t.ceil(e * i.exchange_rate, i.unit_amount, r);
            break;
          case "floor":
            e = t.floor(e * i.exchange_rate, i.unit_amount, r);
        }
        return e;
      },
      formatNumberWithoutUnit(e, t = JS_DEFAULT_CURRENCY) {
        const a = JS_CURRENCY_GROUP[t];
        let i = a.precision;
        return (
          ["/cart", "/checkout"].includes(location.pathname) &&
            (i = a.calc_precision),
          (
            Math.round(e * a.exchange_rate * Math.pow(10, i)) / Math.pow(10, i)
          ).toFixed(i)
        );
      },
      getLocationSearch() {
        const e = {};
        return (
          location.search
            .substring(1)
            .split("&")
            .forEach(function (t) {
              const a = t.split("=");
              e[a[0]] = a[1];
            }),
          e
        );
      },
      getPlatform: () => ("ontouchstart" in document.documentElement ? 2 : 1),
      async addToWishlist(t, a, r, n, s) {
        const o = "USD",
          l = { product_id: t },
          c = await i.post(e.wish, l);
        return (
          0 === c.code &&
            (window.dataLayer &&
              (dataLayer.push({ ecommerce: null }),
              dataLayer.push({
                event: "add_to_wishlist",
                ecommerce: {
                  items: [
                    {
                      item_id: r,
                      item_name: n,
                      price: this.formatNumber(a, o),
                    },
                  ],
                },
              })),
            window.fbq &&
              fbq("track", "AddToWishlist", {
                currency: o,
                value: this.formatNumber(a, o),
                content_ids: [r],
                contents: [{ id: r, quantity: 1 }],
                content_name: n,
                content_category: s,
              }),
            window.ttq &&
              ttq.track("AddToWishlist", {
                contents: [
                  { content_id: r, content_type: "product", content_name: n },
                ],
                value: this.formatNumber(a, o),
                currency: o,
              })),
          c
        );
      },
      updateCartCount(e) {
        const t = document.getElementById("site_cart_num");
        e > 0
          ? ((t.innerHTML = e > 9 ? "9+" : e),
            (t.style.display = "inline-block"))
          : (t.style.display = "none");
      },
      async addToCart(a, r, n, s, o, l, c) {
        const d = "USD",
          u = {
            product_id: a,
            platform: this.getPlatform(),
            qty: r,
            "g-recaptcha-response": c,
          };
        l && (u.cart_rule_id = l);
        const m = await i.post(e.cart, u);
        return (
          0 === m.code &&
            m.data.qty > 0 &&
            (this.updateCartCount(m.data.qty),
            window.dataLayer &&
              (dataLayer.push({ ecommerce: null }),
              dataLayer.push({
                event: "add_to_cart",
                ecommerce: {
                  method: "addtocart",
                  items: [
                    {
                      item_id: s,
                      item_name: o,
                      price: this.formatNumber(n, d),
                      quantity: r,
                    },
                  ],
                },
              })),
            window.fbq &&
              fbq("track", "AddToCart", {
                currency: d,
                value: this.formatNumber(t.multiply(n, r), d),
                content_ids: [s],
                contents: [{ id: s, quantity: r }],
                content_type: "product",
                content_name: o,
              }),
            window.ttq &&
              ttq.track("AddToCart", {
                contents: [
                  { content_id: s, content_type: "product", content_name: o },
                ],
                value: this.formatNumber(t.multiply(n, r), d),
                currency: d,
              })),
          m
        );
      },
      async removeFromCart(t, a, r, n, s, o) {
        const l = await i.delete(`${e.cart}/${t}?g-recaptcha-response=${o}`);
        return (
          0 === l.code &&
            window.dataLayer &&
            (dataLayer.push({ ecommerce: null }),
            dataLayer.push({
              event: "remove_from_cart",
              ecommerce: {
                items: [
                  {
                    item_id: n,
                    item_name: s,
                    price: this.formatNumber(r, "USD"),
                    quantity: a,
                  },
                ],
              },
            })),
          l
        );
      },
      selectProduct() {
        const e = document.getElementsByClassName("js_select_item");
        for (let t = 0; t < e.length; t++)
          (e[t].onclick = (a) => {
            a.preventDefault();
            const i = a.target,
              r = i.getAttribute("data-sku"),
              n = i.getAttribute("data-name"),
              s = i.getAttribute("data-price");
            window.dataLayer &&
              (dataLayer.push({ ecommerce: null }),
              dataLayer.push({
                event: "select_item",
                ecommerce: {
                  items: [
                    {
                      item_id: r,
                      item_name: n,
                      price: this.formatNumber(s, "USD"),
                    },
                  ],
                },
              })),
              (location.href = e[t].href);
          }),
            (e[t].onmouseenter = (e) => {
              if (window.innerWidth < 1280) return;
              const t = e.target;
              if (!t.querySelector("span")) return;
              if (t.scrollWidth <= t.clientWidth) return;
              const a = t.querySelector("span");
              (a.style.display = "inline-block"),
                a.animate(
                  [
                    { transform: "translateX(0)" },
                    {
                      transform: `translateX(${
                        "ar" === JS_CURRENT_LANGUAGE
                          ? t.scrollWidth - t.clientWidth
                          : t.clientWidth - t.scrollWidth
                      }px)`,
                    },
                  ],
                  {
                    duration:
                      80 * Math.ceil((t.scrollWidth - t.clientWidth) / 10),
                    fill: "forwards",
                  }
                );
            }),
            (e[t].onmouseleave = (e) => {
              if (window.innerWidth < 1280) return;
              const t = e.target;
              t.querySelector("span") &&
                (t.querySelector("span").style.display = "inline");
            });
      },
      addProductToCart() {
        const e = document.getElementsByClassName("js_add_to_cart");
        for (let t = 0; t < e.length; t++)
          e[t].onclick = async (a) => {
            a.preventDefault();
            const i = e[t].getAttribute("data-default-text"),
              r = e[t].getAttribute("data-adding-text"),
              n = e[t].getAttribute("data-id"),
              s = e[t].getAttribute("data-price"),
              o = e[t].getAttribute("data-sku"),
              l = e[t].getAttribute("data-name");
            let c = "";
            const d = document.getElementById("cart_rule_id");
            d && (c = d.value),
              (e[t].innerHTML = r),
              grecaptcha.ready(() => {
                grecaptcha
                  .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                  .then(async (a) => {
                    0 === (await this.addToCart(n, 1, s, o, l, c, a)).code &&
                      (e[t].innerHTML = i);
                  });
              });
          };
      },
    },
    n = {
      en: {
        log_into_your_oraimo_account: "Log into Your TheJUJARIAccount",
        email_address: "Email Address",
        password: "Password",
        forgot_your_password: "Forgot your password?",
        reset_it: "Reset it",
        login: "Log in",
        donot_have_an_account: "Don't have an account?",
        create_one: "Create one",
        signin_width_facebook: "Sign in with Facebook",
        signin_width_google: "Sign in with Google",
        shopping_cart: "Shopping Cart",
        all: "ALL",
        subtotal: "Subtotal",
        check_out: "Checkout",
        delete_cart_alert:
          "Are you sure removing this item from your shopping cart?",
        deleting: "Deleting...",
        delete: "Delete",
        cancel: "Cancel",
        total: "Total",
        pages: "pages",
        view_more: "View More",
        learn_more: "Learn More",
        add_to_cart: "Add to Cart",
        adding: "Adding...",
        logining: "Logining...",
        secure_checkout: "Secure Checkout",
        order_complete: "Order Complete",
        home: "HOME",
        transaction_management: "Transaction Management",
        my_order: "My Order",
        account: "Account",
        personal_information: "Personal Information",
        my_wish: "My Wish",
        my_explorer_point: "My Explorer Point",
        address_management: "Address Management",
        product_reviews: "Product Reviews",
        the_minimum_value_is: "The minimum value is {number}.",
        the_maximum_value_is: "The maximum value is {number}.",
        the_maximum_upload_number_is_6: "The maximum upload number is 6.",
        the_maximum_upload_size_is_5m: "The maximum upload size is 5M.",
        the_upload_type_is_PNG_or_JPEG:
          "The maximum upload type is PNG or JPEG.",
        the_email_is_registered: "The email is registered!",
        the_qty_must_be_an_integer: "The qty must be an integer.",
        the_value_must_be_an_integer: "The value must be an integer.",
        most_frequently_searched: "Most frequently searched",
        search: "Search",
        view_cart: "View Cart",
        your_cart_is_empty: "Your cart is empty",
        affiliate: "Affiliate",
        my_account: "My account",
        order: "Order",
        income_details: "Income Details",
        withdraw: "Withdraw",
        user_events: "User Events",
        referral_performance: "Referral Performance",
        affiliate_invite_desc:
          "Share the link with your friends and invite them to join the TheJUJARIaffiliate program. They can get {var1} commissiob and also you can earn a {var2} commission on their total sale!",
        to_VIP: "{var1} to VIP {var2}",
        extra_percent_off: "Extra {number}% OFF",
        left_points:
          "You have {number1} explorer points left, You can use {number2} explorer points for this order",
        point_for_every_currency: "{number1} for every {number2}",
        other: "Other",
        yes: "Yes",
        no: "No",
        submitting: "Submitting...",
      },
      fr: {
        log_into_your_oraimo_account: "Connectez-vous à votre compte oraimo",
        email_address: "Adresse email",
        password: "Mot de passe",
        forgot_your_password: "Vous avez oublié votre mot de passe ?",
        reset_it: "Réinitialisez-le",
        login: "Connexion",
        donot_have_an_account: "Vous n'avez pas de compte ?",
        create_one: "Créer un compte",
        signin_width_facebook: " Se connecter avec Facebook ",
        signin_width_google: "Se connecter avec Google",
        shopping_cart: "Panier",
        all: " TOUT ",
        subtotal: "Sous-total",
        check_out: "Vérification",
        delete_cart_alert:
          "Êtes-vous sûr de vouloir rétirer ce produit du panier ? ",
        deleting: "Supprimer...",
        delete: "Supprimer",
        cancel: "Annuler",
        total: "Total",
        pages: "pages",
        view_more: "Voir plus",
        learn_more: "Découvrir",
        add_to_cart: "Ajouter au panier",
        ajouter: "Ajouter...",
        logining: "Connexion...",
        secure_checkout: "Paiement Sécurisé",
        order_complete: "Commande terminée",
        home: "ACCUEIL",
        transaction_management: "Gestion des transactions",
        my_order: "Ma commande",
        account: "Compte",
        personal_information: "Informations personnelles",
        my_wish: "Mon Souhait",
        my_explorer_point: "Mon point d'exploration",
        address_management: "Gestion des adresses",
        product_reviews: "Commentaires sur les produits",
        the_minimum_value_is: "La valeur minimale est de {number}.",
        the_maximum_value_is: "La valeur maximale est de {number}.",
        the_maximum_upload_number_is_6:
          "Le nombre maximum de téléchargements est de 6.",
        the_maximum_upload_size_is_5m:
          "La taille maximale du téléchargement est de 5M.",
        the_upload_type_is_PNG_or_JPEG:
          "Le type de téléchargement maximal est PNG ou JPEG.",
        the_email_is_registered: "L'adresse électronique est enregistrée !",
        the_qty_must_bean_integer: "La quantité doit être un entier.",
        the_value_must_be_an_integer: "La valeur doit être un entier",
        most_frequently_searched: "La recherche la plus fréquente",
        search: "Recherche",
        view_cart: "Voir le panier",
        your_cart_is_empty: "Votre panier est vide",
        affiliate: "Affilié",
        my_account: "Mon compte",
        order: "Commande",
        income_details: "Details des revenus",
        withdraw: "Retrait",
        user_events: "Activité de l'utilisateur",
        referral_performance: "performance de référence",
        affiliate_invite_desc:
          "Partager le lien avec vos amis et invitez les à rejoindre le programme d'affiliation oraimo. Ils pourront gagner une commission de {var1} et vous pourrez obtenir une commission {var2} du total de leur achat.",
        to_VIP: "{var1} à VIP {var2}",
        extra_percent_off: "Supplément de {number}% de réduction",
        left_points:
          "Il vous reste {number1} points d'exploration. Vous pouvez utiliser {number2} points d'exploration pour cette commande.",
        point_for_every_currency: "{number1} pour chaque {number2}",
        other: "Autre",
        yes: "Oui",
        no: "Non",
        submitting: "Soumettre...",
      },
      ar: {
        log_into_your_oraimo_account:
          "قم بتسجيل الدخول إلى حساب TheJUJARIالخاص بك",
        email_address: "عنوان البريد الإلكتروني",
        password: "كلمة المرور",
        forgot_your_password: "نسيت كلمة السر؟",
        reset_it: "إعادة تعيينها",
        login: "تسجيل الدخول",
        donot_have_an_account: "ليس لديك حساب؟",
        create_one: "اصنع واحدا",
        signin_width_facebook: "قم بتسجيل الدخول باستخدام الفيسبوك",
        signin_width_google: "الدخول مع جوجل",
        shopping_cart: "عربة التسوق",
        all: "الجميع",
        subtotal: "المجموع الفرعي",
        check_out: "الدفع",
        delete_cart_alert:
          "هل أنت متأكد من إزالة هذا العنصر من سلة التسوق الخاصة بك؟",
        deleting: "جار الحذف ...",
        delete: "حذف",
        cancel: "يلغي",
        total: "المجموع",
        pages: "الصفحات",
        view_more: "عرض المزيد",
        learn_more: "يتعلم أكثر",
        add_to_cart: "أضفها الى قائمة المشتريات",
        adding: "جار الإضافة ...",
        logining: "تسجيل الدخول...",
        secure_checkout: "الخروج الآمن",
        order_complete: "الطلب جاهز",
        home: "الصفحة الرئيسية",
        transaction_management: "ادارة العمليات التجارية",
        my_order: "طلبي",
        account: "حساب",
        personal_information: "معلومات شخصية",
        my_wish: "امنيتي",
        my_explorer_point: "نقطة المستكشف الخاص بي",
        address_management: "إدارة العناوين",
        product_reviews: "تعليقات المنتج",
        the_minimum_value_is: "اقل قيمه {number}",
        the_maximum_value_is: "{number} القيمة القصوى هي",
        the_maximum_upload_number_is_6: "الحد الأقصى لعدد التحميل هو 6.",
        the_maximum_upload_size_is_5m: "أقصى حجم للتحميل هو 5 ميجا.",
        the_upload_type_is_PNG_or_JPEG:
          "الحد الأقصى لنوع التحميل هو PNG أو JPEG.",
        the_email_is_registered: "تم تسجيل البريد الإلكتروني!",
        the_qty_must_be_an_integer: "يجب أن تكون الكمية عددًا صحيحًا.",
        the_value_must_be_an_integer: "يجب أن تكون القيمة عددًا صحيحًا.",
        most_frequently_searched: "الأكثر بحثًا",
        search: "يبحث",
        view_cart: "عرض عربة التسوق",
        your_cart_is_empty: "عربة التسوق فارغة",
        affiliate: "تسويق بالعمولة",
        my_account: "حسابي",
        order: "الطلب",
        income_details: "تفاصيل الدخل",
        withdraw: "سحب",
        user_events: "أحداث المستخدم",
        referral_performance: "اداء الاحالة",
        affiliate_invite_desc:
          "شارك الرابط مع أصدقائك وادعوهم للانضمام إلى برنامج التسويق بالعمولة  التابع لشركة oraimo. يمكنهم الحصول على عمولة {var1} ويمكنك أيضًا الحصول على عمولة {var2} على إجمالي مبيعاتهم!",
        to_VIP: "{var1} to VIP {var2}",
        extra_percent_off: "خصم إضافي {number}%",
        left_points:
          "لديك {number1} نقطة استكشاف متبقية، يمكنك استخدام {number2} نقطة استكشاف لهذا الطلب",
        point_for_every_currency: "{number1} لكل {number2}",
        other: "آخر",
        yes: "نعم",
        no: "لا",
        submitting: "تقديم...",
      },
    },
    s = {
      props: { name: String },
      i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: n }),
      template:
        '\n    <div class="v-breadcrumb">\n      <ul>\n        <li><a href="/">{{ $t(\'home\') }}</a></li>\n        <li><span>{{ name }}</span></li>\n      </ul>\n    </div>\n  ',
    },
    o = {
      props: { page: String },
      i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: n }),
      data: () => ({
        affiliateActiveStatus: 0,
        verifyStatus: {},
        isSignedIn: !0,
      }),
      methods: {
        getAffiliateSetting() {
          i.get(e.affiliateSettingDetail).then((e) => {
            0 === e.code &&
              ((this.affiliateActiveStatus = e.data.active), this.getStatus());
          });
        },
        getStatus() {
          i.get(e.affiliateUserAuditStatus).then((e) => {
            0 === e.code && (this.verifyStatus = e.data);
          });
        },
      },
      mounted() {
        localStorage.getItem("token") || (this.isSignedIn = !1),
          window.innerWidth >= 1280 && this.getAffiliateSetting();
      },
      template:
        '\n    <div class="v-user-container">\n      <div class="user-sidenav">\n        <div v-show="isSignedIn">\n          <h4>{{ $t(\'transaction_management\') }}</h4>\n          <ul>\n            <li><a href="/user/order" :class="{ current: page === \'order\' }">{{ $t(\'my_order\') }}</a></li>\n          </ul>\n          <h4>{{ $t(\'account\') }}</h4>\n          <ul>\n            <li><a href="/user/person" :class="{ current: page === \'person\' }">{{ $t(\'personal_information\') }}</a></li>\n            <li><a href="/user/wishlist" :class="{ current: page === \'wishlist\' }">{{ $t(\'my_wish\') }}</a></li>\n            <li><a href="/user/point" :class="{ current: page === \'point\' }">{{ $t(\'my_explorer_point\') }}</a></li>\n            <li><a href="/user/address" :class="{ current: page === \'address\' }">{{ $t(\'address_management\') }}</a></li>\n            <li><a href="/user/review" :class="{ current: page === \'review\' }">{{ $t(\'product_reviews\') }}</a></li>\n          </ul>\n          <h4 v-if="affiliateActiveStatus === 1 && verifyStatus.audit_status === 1">{{ $t(\'affiliate\') }}</h4>\n          <ul v-if="affiliateActiveStatus === 1 && verifyStatus.audit_status === 1">\n            <li><a href="/affiliate/user" :class="{ current: page === \'affiliate_user\' }">{{ $t(\'my_account\') }}</a></li>\n            <li><a href="/affiliate/order" :class="{ current: page === \'affiliate_order\' }">{{ $t(\'order\') }}</a></li>\n            <li><a href="/affiliate/cash-flow" :class="{ current: page === \'affiliate_cashflow\' }">{{ $t(\'income_details\') }}</a></li>\n            <li><a href="/affiliate/withdraw" :class="{ current: page === \'affiliate_withdraw\' }">{{ $t(\'withdraw\') }}</a></li>\n            <li><a href="/affiliate/activity-list" :class="{ current: page === \'affiliate_activity\' }">{{ $t(\'user_events\') }}</a></li>\n            <li><a href="/affiliate/subordinate" :class="{ current: page === \'affiliate_subordinate\' }">{{ $t(\'referral_performance\') }}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class="user-main">\n        <slot></slot>\n      </div>\n    </div>\n  ',
    },
    l = {
      props: { loading: Boolean, fullscreen: Boolean },
      template:
        '\n    <div class="v-loading">\n      <div class="v-loading-mask" v-if="loading" :style="{ position: fullscreen ? \'fixed\' : \'absolute\' }">\n        <div class="v-loading-spinner">\n          <div class="v-loading-loader"></div>\n        </div>\n      </div>\n      <slot></slot>\n    </div>\n  ',
    },
    c = {
      props: {
        simple: { type: Boolean, default: !1 },
        data: Object,
        click: Function,
        more: Function,
      },
      i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: n }),
      template:
        '\n    <ul\n      v-if="data.data.length > 0"\n      class="site-pagination"\n    >\n      <li v-show="!simple"><span>{{ $t(\'total\') }} {{ data.last_page }} {{ $t(\'pages\') }}</span></li>\n      <li>\n        <a\n          href="javascript:;"\n          class="prev-page"\n          :class="{ disabled: data.current_page === 1 }"\n          :data-href="data.prev_page_url"\n          @click="$emit(\'click\', data.prev_page_url)"\n        ><span class="symbol">&lt;</span></a>\n      </li>\n      <li v-if="data.current_page - 1 > 2 && !simple">\n        <a\n          href="javascript:;"\n          :data-href="data.first_page_url"\n          @click="$emit(\'click\', data.first_page_url)"\n        >1</a>\n      </li>\n      <li v-if="data.current_page > 4 && !simple">...</li>\n      <li\n        v-if="!simple"\n        v-for="(link, index) in data.links"\n        :key="link.label"\n      >\n        <a\n          href="javascript:;"\n          v-if="index >= Math.max(data.current_page - 2, 1) && index <= Math.min(data.current_page + 2, data.last_page)"\n          :class="{ current: data.current_page === index }"\n          :data-href="link.url"\n          @click="$emit(\'click\', link.url)"\n        >{{ index }}</a>\n      </li>\n      <li v-if="simple">\n        <a href="javascript:;">{{ data.current_page }}</a>\n      </li>\n      <li v-if="data.current_page < data.last_page - 3 && !simple">...</li>\n      <li v-if="data.current_page < data.last_page - 2 && !simple">\n        <a\n          href="javascript:;"\n          :data-href="data.last_page_url"\n          @click="$emit(\'click\', data.last_page_url)"\n        >{{ data.last_page }}</a>\n      </li>\n      <li>\n        <a\n          href="javascript:;"\n          class="next-page"\n          :class="{ disabled: data.current_page === data.last_page }"\n          :data-href="data.next_page_url"\n          @click="$emit(\'click\', data.next_page_url)"\n        >\n          <span class="symbol">&gt;</span>\n        </a>\n      </li>\n      <li class="view-more">\n        <button\n          type="button"\n          :disabled="data.current_page === data.last_page"\n          :data-href="data.next_page_url"\n          @click="$emit(\'more\', data.next_page_url)"\n        >\n          <span class="text">{{ $t(\'view_more\') }}</span>\n        </button>\n      </li>\n    </ul>\n  ',
    };
  new Vue({
    el: "#app",
    components: {
      "v-user-breadcrumb": s,
      "v-user-container": o,
      "v-loading": l,
      "v-pagination": c,
    },
    data: { reviews: { data: [] }, loading: !0 },
    methods: {
      getReviews() {
        i.get(e.userReview).then((e) => {
          0 === e.code && (this.reviews = e.data), (this.loading = !1);
        });
      },
      handlePageClick(e, t) {
        (this.loading = !0),
          i.get(e).then((e) => {
            if (0 === e.code)
              if ("replace" === t) this.reviews = e.data;
              else if ("push" === t) {
                const t = e.data,
                  a = [...this.reviews.data, ...e.data.data];
                (t.data = a), (this.reviews = t);
              }
            this.loading = !1;
          });
      },
      getEmptyContainerHeight() {
        const e = document.querySelector(".page-title").offsetHeight;
        let t = 0;
        if (window.innerWidth < 1280) {
          const a = document.getElementById("header").clientHeight,
            i = document.getElementById("footer").clientHeight;
          t = window.innerHeight - a - e - i;
        } else {
          t = document.querySelector(".user-sidenav").clientHeight - e;
        }
        return t;
      },
    },
    mounted() {
      this.getReviews();
    },
    updated() {
      r.formatPrice();
    },
  });
})();
