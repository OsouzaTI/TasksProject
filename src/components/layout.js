import React, { useState } from 'react';
import { Grid, Menu, Item, ContentMiddle } from './styles'
import SideList from './SideList'
import TaskManagerContainer from './TaskManager'
import Timer from './Timer'
import ModalTask from './modal'

const Layout = () => {
    return (
        <Grid>
            <Timer />
            <SideList />
            <ContentMiddle>
                <Menu>
                    <Item>
                        <ModalTask />
                    </Item>
                </Menu>
                <TaskManagerContainer />
            </ContentMiddle>
        </Grid>
    );
}

export default Layout;
