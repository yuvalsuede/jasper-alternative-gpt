import React from 'react';
import Layout from '../components/Layout';
import CardGrid from "../components/CardGrid";
import {TEMPLATES} from "../constants/templates";

const HomePage: React.FC = () => {
    return (
        <Layout title="Templates">

            <CardGrid cards={TEMPLATES}/>
        </Layout>
    );
};

export default HomePage;
