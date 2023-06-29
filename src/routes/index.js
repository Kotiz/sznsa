import {createRouter, createWebHistory} from 'vue-router'

import FancyTextSzansa from '../components/szansa/fancy-text-historia.vue';
import FancyTextCele from '../components/szansa/fancy-text-cele.vue';
import TeamSectionZarzad from '../components/szansa/team-section-zarzad.vue';
import ContactStyleSzansa from '../components/szansa/contact-style.vue';

// import HomePageOne from '../pages/home';
// import EventPage from '../pages/event';
import DocLanding from '../pages/doc-landing';
import CustomerSupport from '../pages/customer-support';
import ProductLanding from '../pages/product-landing';
import ProductLandingDark from '../pages/product-landing-dark';
import NoteTaking from '../pages/note-taking';
import VideoEditor from '../pages/video-editor';
import AppointmentSchedule from '../pages/appointment-schedule';
import MobileApp from '../pages/mobile-app';
import DocSignature from '../pages/doc-signature';
import WebsiteBuilder from '../pages/website-builder';
import FormSurvey from '../pages/form-survey.vue';
import VR_Landing from '../pages/vr-landing';
import ComingSoon from '../pages/coming-soon';
import Portfolio_v1 from '../pages/portfolio-v1';
import Portfolio_v2 from '../pages/portfolio-v2';
import Portfolio_v3 from '../pages/portfolio-v3';
import Portfolio_v4 from '../pages/portfolio-v4';
import Portfolio_v5 from '../pages/portfolio-v5';
import PortfolioDetails from '../pages/portfolio-details';
import DynamicPortfolioDetails from '../pages/portfolio-details/dynamic-details';
import Team_v1 from '../pages/team-v1';
import Team_v2 from '../pages/team-v2';
import TeamDetails from '../pages/team-details';
import TeamDetailsDynamic from '../pages/team-details/dynamic-details';
import Services_v1 from '../pages/services-v1';
import Services_v2 from '../pages/services-v2';
import Services_v3 from '../pages/services-v3';
import Services_v4 from '../pages/services-v4';
import ServiceDetails from '../pages/service-details';
import DynamicServiceDetails from '../pages/service-details/dynamic-details';
import AboutUsCs from '../pages/about-us(cs)';
import AboutUsEvent from '../pages/about-us(event)';
import AboutUsManagement from '../pages/about-us(management)';
import AboutUsDoc from '../pages/about-us(doc)';
import PricingCs from '../pages/pricing(cs)';
import PricingEvent from '../pages/pricing(event)';
import PricingManagement from '../pages/pricing(management)';
// import ContactCs from '../pages/contact-us(cs)';
import ContactEvent from '../pages/contact-us(event)';
import ContactManagement from '../pages/contact-us(management)';
import ContactDoc from '../pages/contact-us(doc)';
import SolutionManagement from '../pages/solution(managment)';
import Product_cs from '../pages/product-cs';
import FeatureCs from '../pages/feature-cs';
import Faqs from '../pages/faq-page';
import FaqDetails from '../pages/faq-details';
import DynamicFaqDetails from '../pages/faq-details/dynamic-details';
import TermsCondition from '../pages/terms-condition';
import LoginPage from '../pages/login';
import SignUp from '../pages/sign-up';
import Blog_v1 from '../pages/blog-v1';
import Blog_v2 from '../pages/blog-v2';
import Blog_v3 from '../pages/blog-v3';
import Blog_v4 from '../pages/blog-v4';
import BlogDetails from '../pages/blog-details';
import DynamicBlogDetails from '../pages/blog-details/dynamic-details';
import DocFullWidth from '../pages/doc-fullwidth';
import DocFullWidthBanner from '../pages/doc-full-width-banner';
import DocBox from '../pages/doc-box';
import DocBoxBanner from '../pages/doc-box-banner';
import ChangeLog from '../pages/changelog';
import NotFound from '../pages/404';


const routes = [
    {
        path: '/',
        name: 'portfolio-v3',
        component: Portfolio_v3,
        meta: {
            title: 'Stowarzyszenie Szansa',
        },
    },
    {
        path: '/history',
        name: 'History',
        component: FancyTextSzansa,
        meta: {
            title: 'SZANSA - Historia',
        },
    },
    {
        path: '/nasz-cele',
        name: 'Nasze-Cele',
        component: FancyTextCele,
        meta: {
            title: 'SZANSA - Nasze cele',
        },
    },
    {
        path: '/szansa-zarzad',
        name: 'Zarząd',
        component: TeamSectionZarzad,
        meta: {
            title: 'SZANSA - Zarzad',
        },
    },
    {
        path: '/contact-style',
        name: 'kontakt',
        component: ContactStyleSzansa,
        meta: {
            title: 'SZANSA - Kontakt',
        },
    },
    {
        path: '/doc-landing',
        name: 'DocLanding',
        component: DocLanding,
        meta: {
            title: 'Doc Landing || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/customer-support',
        name: 'CustomerSupport',
        component: CustomerSupport,
        meta: {
            title: 'Customer Support || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/product-landing',
        name: 'ProductLanding',
        component: ProductLanding,
        meta: {
            title: 'Product Landing || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/product-landing-dark',
        name: 'ProductLandingDark',
        component: ProductLandingDark,
        meta: {
            title: 'Product Landing Dark || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/note-taking',
        name: 'NoteTaking',
        component: NoteTaking,
        meta: {
            title: 'Note Taking || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/video-editor',
        name: 'VideoEditor',
        component: VideoEditor,
        meta: {
            title: 'Video Editor || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/appointment-schedule',
        name: 'AppointmentSchedule',
        component: AppointmentSchedule,
        meta: {
            title: 'Appointment Schedule || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/mobile-app',
        name: 'MobileApp',
        component: MobileApp,
        meta: {
            title: 'Mobile App || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/doc-signature',
        name: 'DocSignature',
        component: DocSignature,
        meta: {
            title: 'Doc Signature || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/website-builder',
        name: 'WebsiteBuilder',
        component: WebsiteBuilder,
        meta: {
            title: 'Website Builder || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/form-survey',
        name: 'FormSurvey',
        component: FormSurvey,
        meta: {
            title: 'Form Survey || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/vr-landing',
        name: 'VR_Landing',
        component: VR_Landing,
        meta: {
            title: 'VR Landing || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/coming-soon',
        name: 'ComingSoon',
        component: ComingSoon,
        meta: {
            title: 'Coming Soon || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/portfolio-v1',
        name: 'Portfolio_v1',
        component: Portfolio_v1,
        meta: {
            title: 'Portfolio V1 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/portfolio-v2',
        name: 'Portfolio_v2',
        component: Portfolio_v2,
        meta: {
            title: 'Portfolio V2 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/portfolio-v3',
        name: 'Portfolio_v3',
        component: Portfolio_v3,
        meta: {
            title: 'Portfolio V3 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/portfolio-v4',
        name: 'Portfolio_v4',
        component: Portfolio_v4,
        meta: {
            title: 'Portfolio V4 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/portfolio-v5',
        name: 'Portfolio_v5',
        component: Portfolio_v5,
        meta: {
            title: 'Portfolio V5 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/portfolio-details/:id',
        name: 'DynamicPortfolioDetails',
        component: DynamicPortfolioDetails,
        meta: {
            title: 'Portfolio Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/portfolio-details',
        name: 'PortfolioDetails',
        component: PortfolioDetails,
        meta: {
            title: 'Portfolio Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/team-v1',
        name: 'Team_v1',
        component: Team_v1,
        meta: {
            title: 'Team V1|| Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/team-v2',
        name: 'Team_v2',
        component: Team_v2,
        meta: {
            title: 'Team V2 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/team-details',
        name: 'TeamDetails',
        component: TeamDetails,
        meta: {
            title: 'Team Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/team-details/:id',
        name: 'TeamDetailsDynamic',
        component: TeamDetailsDynamic,
        meta: {
            title: 'Team Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/services-v1',
        name: 'Services_v1',
        component: Services_v1,
        meta: {
            title: 'Services V1 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/services-v2',
        name: 'Services_v2',
        component: Services_v2,
        meta: {
            title: 'Services V2 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/services-v3',
        name: 'Services_v3',
        component: Services_v3,
        meta: {
            title: 'Services V3 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/services-v4',
        name: 'Services_v4',
        component: Services_v4,
        meta: {
            title: 'Services V4 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/service-details',
        name: 'ServiceDetails',
        component: ServiceDetails,
        meta: {
            title: 'Service Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/service-details/:id',
        name: 'DynamicServiceDetails',
        component: DynamicServiceDetails,
        meta: {
            title: 'Service Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/about-us-cs',
        name: 'AboutUsCs',
        component: AboutUsCs,
        meta: {
            title: 'AboutUs Cs || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/about-us-event',
        name: 'AboutUsEvent',
        component: AboutUsEvent,
        meta: {
            title: 'AboutUs Event || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/about-us-management',
        name: 'AboutUsManagement',
        component: AboutUsManagement,
        meta: {
            title: 'AboutUs Management || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/about-us-doc',
        name: 'AboutUsDoc',
        component: AboutUsDoc,
        meta: {
            title: 'AboutUs Doc || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/pricing-cs',
        name: 'PricingCs',
        component: PricingCs,
        meta: {
            title: 'Pricing Cs || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/pricing-event',
        name: 'PricingEvent',
        component: PricingEvent,
        meta: {
            title: 'Pricing Event || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/pricing-management',
        name: 'PricingManagement',
        component: PricingManagement,
        meta: {
            title: 'Pricing Management || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/contact-us-event',
        name: 'ContactEvent',
        component: ContactEvent,
        meta: {
            title: 'ContactUs Event || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/contact-us-management',
        name: 'ContactManagement',
        component: ContactManagement,
        meta: {
            title: 'ContactUs Management || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/contact-us-doc',
        name: 'ContactDoc',
        component: ContactDoc,
        meta: {
            title: 'ContactUs Doc || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/solution-management',
        name: 'SolutionManagement',
        component: SolutionManagement,
        meta: {
            title: 'Solution Management || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/product-cs',
        name: 'Product_cs',
        component: Product_cs,
        meta: {
            title: 'Product Cs || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/feature-cs',
        name: 'FeatureCs',
        component: FeatureCs,
        meta: {
            title: 'Feature Cs || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/faqs',
        name: 'Faqs',
        component: Faqs,
        meta: {
            title: 'Faqs || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/faq-details/:id',
        name: 'DynamicFaqDetails',
        component: DynamicFaqDetails,
        meta: {
            title: 'Faq Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/faq-details',
        name: 'FaqDetails',
        component: FaqDetails,
        meta: {
            title: 'Faq Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/terms-condition',
        name: 'TermsCondition',
        component: TermsCondition,
        meta: {
            title: 'Terms Condition || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
        meta: {
            title: 'Login || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/register',
        name: 'SignUp',
        component: SignUp,
        meta: {
            title: 'Register || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/blog-v1',
        name: 'Blog_v1',
        component: Blog_v1,
        meta: {
            title: 'Blog V1 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/blog-v2',
        name: 'Blog_v2',
        component: Blog_v2,
        meta: {
            title: 'Blog V2 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/blog-v3',
        name: 'Blog_v3',
        component: Blog_v3,
        meta: {
            title: 'Blog V3 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/blog-v4',
        name: 'Blog_v4',
        component: Blog_v4,
        meta: {
            title: 'Blog V4 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/blog-details',
        name: 'BlogDetails',
        component: BlogDetails,
        meta: {
            title: 'Blog Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/blog-details/:id',
        name: 'DynamicBlogDetails',
        component: DynamicBlogDetails,
        meta: {
            title: 'Blog Details || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/doc-full-width',
        name: 'DocFullWidth',
        component: DocFullWidth,
        meta: {
            title: 'Doc Full Width || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/doc-full-width-banner',
        name: 'DocFullWidthBanner',
        component: DocFullWidthBanner,
        meta: {
            title: 'Doc Full Width Banner || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/doc-box',
        name: 'DocBox',
        component: DocBox,
        meta: {
            title: 'Doc Box || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/doc-box-banner',
        name: 'DocBoxBanner',
        component: DocBoxBanner,
        meta: {
            title: 'Doc Box Banner || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/changelog',
        name: 'ChangeLog',
        component: ChangeLog,
        meta: {
            title: 'Changelog || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound || Deski-Saas & Software Vue Template',
        },
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
