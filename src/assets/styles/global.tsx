import {createGlobalStyle} from 'styled-components';

 export default createGlobalStyle`
    * {
        padding: 0;
        outline: 0;
    }

    body {
        margin: 0;
    }

    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans'),
            url('../fonts/open-sans-v29-latin_cyrillic-regular.woff2') format('woff2'),
            url('../fonts/open-sans-v29-latin_cyrillic-regular.woff') format('woff');
    }

        @font-face {
        font-family: 'SF UI Display Ultralight';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Ultralight'),
            url('../fonts/sf-ui-display-ultralight-58646b19bf205.woff') format('woff');
    }
        

        @font-face {
        font-family: 'SF UI Display Thin';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Thin'), 
            url('../fonts/sf-ui-display-thin-58646e9b26e8b.woff') format('woff');
    }
        

        @font-face {
        font-family: 'SF UI Display Light';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Light'),
            url('../fonts/sf-ui-display-light-58646b33e0551.woff') format('woff');
    }
        

        @font-face {
        font-family: 'SF UI Display Medium';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Medium'),
            url('../fonts/sf-ui-display-medium-58646be638f96.woff') format('woff');
    }
        

        @font-face {
        font-family: 'SF UI Display Semibold';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Semibold'),
            url('../fonts/sf-ui-display-semibold-58646eddcae92.woff') format('woff');
    }
        

        @font-face {
        font-family: 'SF UI Display Bold';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Bold'),
            url('../fonts/sf-ui-display-bold-58646a511e3d9.woff') format('woff');
    }
        

        @font-face {
        font-family: 'SF UI Display Heavy';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Heavy'),
            url('../fonts/sf-ui-display-heavy-586470160b9e5.woff') format('woff');
    }
        

        @font-face {
        font-family: 'SF UI Display Black';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Black'),
            url('../fonts/sf-ui-display-black-58646a6b80d5a.woff') format('woff');
    }
 `
