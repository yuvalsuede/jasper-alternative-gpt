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

            <CardGrid cards={TEMPLATES}/>
        </Layout>
    );
};

export default HomePage;
