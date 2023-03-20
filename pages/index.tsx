import React from 'react';
import Layout from '../components/Layout';
import CardGrid from "../components/CardGrid";
import {TEMPLATES} from "../constants/templates";

const HomePage: React.FC = () => {

    return (
        <Layout title="">
            <h1 className="text-4xl font-bold mt-10 ml-10">
                Welcome to <span className="text-blue-600">Jema.ai</span>
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
