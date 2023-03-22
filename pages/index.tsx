import React from 'react';
import Layout from '../components/Layout';
import CardGrid from "../components/CardGrid";
import {TEMPLATES} from "../constants/templates";

const HomePage: React.FC = () => {

    return (
        <Layout title="">
            <h1 className="text-4xl font-bold mt-10 ml-10">
                Welcome to <span className="text-blue-600">Jema.ai</span>
                <div>
                    <a href="https://www.producthunt.com/posts/jema-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-jema&#0045;ai"
                       target="_blank"><img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384923&theme=light"
                        alt="Jema&#0046;ai - The&#0032;open&#0032;source&#0032;Jasper&#0046;ai&#0032;alternative | Product Hunt"
                        style={{width: '250px', height: '54px', marginTop: '10px'}}
                        width="250" height="54"/></a>
                </div>
            </h1>

            <h2 className="text-2xl font-light mt-5 ml-10">
                Create amazing <strong className="text-blue-600">blog posts, marketing copy, SEO content</strong> and a
                lot more with ChatGPT.
            </h2>
            <CardGrid cards={TEMPLATES}/>
        </Layout>
    );
};

export default HomePage;
