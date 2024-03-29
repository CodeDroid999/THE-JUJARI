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
    a = axios.create();
  a.interceptors.request.use(function (e) {
    const a = localStorage.getItem("token");
    return a && (e.headers.Authorization = `Bearer ${a}`), e;
  }),
    a.interceptors.response.use(
      function (a) {
        const t = a.config.url;
        return -1e3 !== a.data.code ||
          [
            e.wish,
            e.userLikeReview,
            e.reviewLike,
            e.reviewUnlike,
            e.arrivalReminder,
            e.affiliateUserAuditStatus,
          ].includes(t)
          ? a.data
          : (localStorage.removeItem("token"),
            localStorage.removeItem("name"),
            void (location.href = "/auth/sign-in"));
      },
      function (e) {
        return Promise.reject(e);
      }
    );
  const t = a,
    i = {
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
    r = {
      props: { name: String },
      i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: i }),
      template:
        '\n    <div class="v-breadcrumb">\n      <ul>\n        <li><a href="/">{{ $t(\'home\') }}</a></li>\n        <li><span>{{ name }}</span></li>\n      </ul>\n    </div>\n  ',
    },
    n = {
      props: { page: String },
      i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: i }),
      data: () => ({
        affiliateActiveStatus: 0,
        verifyStatus: {},
        isSignedIn: !0,
      }),
      methods: {
        getAffiliateSetting() {
          t.get(e.affiliateSettingDetail).then((e) => {
            0 === e.code &&
              ((this.affiliateActiveStatus = e.data.active), this.getStatus());
          });
        },
        getStatus() {
          t.get(e.affiliateUserAuditStatus).then((e) => {
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
    s = {
      props: { loading: Boolean, fullscreen: Boolean },
      template:
        '\n    <div class="v-loading">\n      <div class="v-loading-mask" v-if="loading" :style="{ position: fullscreen ? \'fixed\' : \'absolute\' }">\n        <div class="v-loading-spinner">\n          <div class="v-loading-loader"></div>\n        </div>\n      </div>\n      <slot></slot>\n    </div>\n  ',
    },
    o = {
      props: {
        simple: { type: Boolean, default: !1 },
        data: Object,
        click: Function,
        more: Function,
      },
      i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: i }),
      template:
        '\n    <ul\n      v-if="data.data.length > 0"\n      class="site-pagination"\n    >\n      <li v-show="!simple"><span>{{ $t(\'total\') }} {{ data.last_page }} {{ $t(\'pages\') }}</span></li>\n      <li>\n        <a\n          href="javascript:;"\n          class="prev-page"\n          :class="{ disabled: data.current_page === 1 }"\n          :data-href="data.prev_page_url"\n          @click="$emit(\'click\', data.prev_page_url)"\n        ><span class="symbol">&lt;</span></a>\n      </li>\n      <li v-if="data.current_page - 1 > 2 && !simple">\n        <a\n          href="javascript:;"\n          :data-href="data.first_page_url"\n          @click="$emit(\'click\', data.first_page_url)"\n        >1</a>\n      </li>\n      <li v-if="data.current_page > 4 && !simple">...</li>\n      <li\n        v-if="!simple"\n        v-for="(link, index) in data.links"\n        :key="link.label"\n      >\n        <a\n          href="javascript:;"\n          v-if="index >= Math.max(data.current_page - 2, 1) && index <= Math.min(data.current_page + 2, data.last_page)"\n          :class="{ current: data.current_page === index }"\n          :data-href="link.url"\n          @click="$emit(\'click\', link.url)"\n        >{{ index }}</a>\n      </li>\n      <li v-if="simple">\n        <a href="javascript:;">{{ data.current_page }}</a>\n      </li>\n      <li v-if="data.current_page < data.last_page - 3 && !simple">...</li>\n      <li v-if="data.current_page < data.last_page - 2 && !simple">\n        <a\n          href="javascript:;"\n          :data-href="data.last_page_url"\n          @click="$emit(\'click\', data.last_page_url)"\n        >{{ data.last_page }}</a>\n      </li>\n      <li>\n        <a\n          href="javascript:;"\n          class="next-page"\n          :class="{ disabled: data.current_page === data.last_page }"\n          :data-href="data.next_page_url"\n          @click="$emit(\'click\', data.next_page_url)"\n        >\n          <span class="symbol">&gt;</span>\n        </a>\n      </li>\n      <li class="view-more">\n        <button\n          type="button"\n          :disabled="data.current_page === data.last_page"\n          :data-href="data.next_page_url"\n          @click="$emit(\'more\', data.next_page_url)"\n        >\n          <span class="text">{{ $t(\'view_more\') }}</span>\n        </button>\n      </li>\n    </ul>\n  ',
    };
  new Vue({
    el: "#app",
    components: {
      "v-user-breadcrumb": r,
      "v-user-container": n,
      "v-loading": s,
      "v-pagination": o,
    },
    data: { total: {}, totalLoading: !0, list: {}, listLoading: !0 },
    methods: {
      getTotal() {
        t.get(e.pointTotal).then((e) => {
          0 === e.code && (this.total = e.data), (this.totalLoading = !1);
        });
      },
      getList() {
        t.get(e.pointList).then((e) => {
          0 === e.code && (this.list = e.data), (this.listLoading = !1);
        });
      },
      handlePageClick(e, a) {
        (this.listLoading = !0),
          t.get(e).then((e) => {
            if (0 === e.code)
              if ("replace" === a) this.list = e.data;
              else if ("push" === a) {
                const a = e.data,
                  t = [...this.list.data, ...e.data.data];
                (a.data = t), (this.list = a);
              }
            this.listLoading = !1;
          });
      },
    },
    mounted() {
      this.getTotal(), this.getList();
    },
  });
})();
