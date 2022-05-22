import {FunctionComponent, h, JSX} from "preact";

interface LinkProps {
    type: 'twitter' | 'discord' | 'website' | 'reddit' | 'github' | 'twitch' | 'jundao',
    href: string,
    class?: string
}

const Link: FunctionComponent<LinkProps> = (props) => {

    let icon: JSX.Element | null = null;

    switch (props.type) {
        case "twitter":
            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
            break;

        case "website":
            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.355-6.048v-.105c0-.922 0-1.343-.652-1.716a7.374 7.374 0 0 0-.645-.325c-.367-.167-.61-.276-.938-.756a12.014 12.014 0 0 1-.116-.172c-.345-.525-.594-.903-1.542-.753-1.865.296-2.003.624-2.085 1.178l-.013.091c-.121.81-.143 1.082.195 1.437 1.265 1.327 2.023 2.284 2.253 2.844.112.273.4 1.1.202 1.918a8.185 8.185 0 0 0 3.151-2.237c.11-.374.19-.84.19-1.404zM12 3.833c-2.317 0-4.41.966-5.896 2.516.177.123.331.296.437.534.204.457.204.928.204 1.345 0 .328 0 .64.105.865.144.308.766.44 1.315.554.197.042.399.084.583.135.506.14.898.595 1.211.96.13.151.323.374.42.43.05-.036.211-.211.29-.498.062-.22.044-.414-.045-.52-.56-.66-.529-1.93-.356-2.399.272-.739 1.122-.684 1.744-.644.232.015.45.03.614.009.622-.078.814-1.025.949-1.21.292-.4 1.186-1.003 1.74-1.375A8.138 8.138 0 0 0 12 3.833z"/></svg>
            break;

        case "reddit":
            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.67-10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L13 6.65l2.14.45a1 1 0 1 0 .13-.61L12.82 6a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33zm-10 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 12 16a3.28 3.28 0 0 0 2.09-.61.28.28 0 1 1 .39.4v-.04zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04l.01-.04z"/></svg>
            break;

        case "github":
            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/></svg>
            break;

        case "twitch":
            icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M21 3v11.74l-4.696 4.695h-3.913l-2.437 2.348H6.913v-2.348H3V6.13L4.227 3H21zm-1.565 1.565H6.13v11.74h3.13v2.347l2.349-2.348h4.695l3.13-3.13V4.565zm-3.13 3.13v4.696h-1.566V7.696h1.565zm-3.914 0v4.696h-1.565V7.696h1.565z"/></svg>
            break;

        case "jundao":
            icon = <svg width="100%" height="100%" viewBox="0 0 1086 1086" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                    <g transform="matrix(1,0,0,1,-533,-10682)">
                        <g transform="matrix(1,0,0,1,32.443,-0.91335)">
                            <g transform="matrix(4.69247,0,0,4.15935,-2380.49,10146)">
                                <g transform="matrix(0.213108,0,0,0.240422,-5631.1,-4007.35)">
                                    <path d="M30389.8,17310.8C30389.8,17252.7 30342.6,17205.6 30284.5,17205.6L29410.2,17205.6C29352.1,17205.6 29305,17252.7 29305,17310.8L29305,18185.1C29305,18243.2 29352.1,18290.4 29410.2,18290.4L30284.5,18290.4C30342.6,18290.4 30389.8,18243.2 30389.8,18185.1L30389.8,17310.8Z" style="fill:rgb(0,108,255);"/>
                                </g>
                                <g transform="matrix(0.213108,0,0,0.240422,407.818,73.3014)">
                                    <g>
                                        <g transform="matrix(1,0,0,1,-1181.15,-77.1774)">
                                            <path d="M2603.44,739.043L2603.44,1164.9C2603.44,1213.3 2642.73,1252.59 2691.13,1252.59C2739.53,1252.59 2778.82,1213.3 2778.82,1164.9L2778.82,1036.42" style="fill:none;stroke:white;stroke-width:50px;"/>
                                        </g>
                                        <g transform="matrix(1,0,0,1,-1181.15,-77.1774)">
                                            <path d="M2778.82,817.893L2778.82,539.684C2778.82,491.287 2739.53,451.994 2691.13,451.994C2642.73,451.994 2603.44,491.287 2603.44,539.684L2603.44,638.671" style="fill:none;stroke:white;stroke-width:50px;"/>
                                        </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,-1181.15,-77.1774)">
                                        <path d="M2778.82,958.085L2778.82,926.006" style="fill:none;stroke:white;stroke-width:50px;"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>;
            break;

    }

    return (
        <a href={props.href} target="_blank" class={props.class ?? 'transition-all transform text-gray-900 hover:text-blue-500 dark:hover:text-blue-500 hover:-translate-y-px hover:scale-110 dark:text-gray-100'}>
            {icon}
        </a>
    )
}

export default Link;
