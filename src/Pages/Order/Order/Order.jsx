import { Helmet } from "react-helmet-async";
import PageCover from "../../Shared/PageCover/PageCover";
import orderCoverBg from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    const [menu] = useMenu();

    // const { category } = useParams();
    console.log(category);

    const desserts = menu.filter(item => item.category == "dessert");
    const pizzas = menu.filter(item => item.category == "pizza");
    const salads = menu.filter(item => item.category == "salad");
    const soups = menu.filter(item => item.category == "soup");
    const drinks = menu.filter(item => item.category == "drinks");

    return (
        <div>
            <Helmet>
                <title>Order Food | Bistro Boss Restaurant</title>
            </Helmet>

            {/* Page Main Cover at the Top */}
            <PageCover
                image={orderCoverBg}
                coverTitle="Order Food"
                coverSubTitle="Would you like to try a dish?"
            />

            <div className="max-w-6xl mx-auto my-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center">
                        <Tab>Salads</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;