import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from "../../components/Layout";
import {TEMPLATES} from "../../constants/templates";
import InputOutputComponent from "../../components/InputOutputComponent";

const TemplatePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [template, setTemplate] = useState(null);

    useEffect(() => {
        if (id) {
            const selectedTemplate = TEMPLATES.find((t) => t.id === id);
            // @ts-ignore
            setTemplate(selectedTemplate);
        }
    }, [id]);

    if (!template) {
        return <div>Loading...</div>;
    }

    return (
        // @ts-ignore
        <Layout title="">
            <InputOutputComponent template={template}/>
        </Layout>

    );
};

export default TemplatePage;
