import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Badge, Divider, Menu, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { logo, Theme } from 'utils';
import { I18n } from 'i18n';

const Header = ({ title, onLogoutPressed, theme, visible, setVisible, navigation }) => {
    return (
        <View style={styles(theme).header}>
            <View style={styles(theme).headerIconText}>
                <Image source={logo} style={{ width: 55, resizeMode: "cover", height: 30, backgroundColor: theme.gray3, borderRadius: 3, }} />
                <Text style={styles(theme).headerText}>{title}</Text>
            </View>
            <View>

            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("DiscussStacks")
                }}>
                <MaterialCommunityIcons
                    name="message-text"
                    size={20}
                    color={theme.primaryText}
                    style={styles(theme).icon}
                />
                <Badge
                    style={{ color: "white", backgroundColor: "red", position: "absolute", top: -10, right: -2 }}
                    onPress={() => {
                        navigation.navigate("DiscussStacks")
                    }}>
                    {1}
                </Badge>
            </TouchableOpacity>
            <Menu
                visible={visible}
                onDismiss={() => { setVisible(false) }}
                style={{ width: '50%' }}
                contentStyle={{ backgroundColor: theme.primaryBackground, }}
                anchor={
                    <TouchableOpacity onPress={setVisible}>
                        <MaterialCommunityIcons
                            name="more"
                            size={20}
                            color={theme.primaryText}
                            style={styles.icon}
                        />
                    </TouchableOpacity>}>
                <Menu.Item style={{ alignSelf: "center" }} titleStyle={{
                    fontWeight: "bold", textAlign: "center", color: theme.primaryText,
                    ...Theme.fontStyle.montserrat.regular,
                }} onPress={() => { }} title={I18n.t('more')} />

                <Divider />
                <TouchableOpacity style={styles(theme).menuItem}
                    onPress={() => {
                        navigation.navigate("SettingsScreenStacks")
                        setVisible(false)
                    }}
                >
                    <MaterialCommunityIcons
                        name="cog"
                        size={20}
                        color={theme.primaryText}
                        style={styles(theme).icon}
                    />
                    <Text style={styles(theme).menuText}> {I18n.t('settings')}</Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity style={styles(theme).menuItem}
                    onPress={() => onLogoutPressed(false)}
                >
                    <MaterialCommunityIcons
                        name="logout"
                        size={20}
                        color={theme.primaryText}
                        style={styles(theme).icon}
                    />
                    <Text style={styles(theme).menuText}> {I18n.t('logout')}</Text>
                </TouchableOpacity>
            </Menu>
            {/* <TouchableOpacity onPress={onLogoutPressed}>
                <MaterialCommunityIcons
                    name="power" size={33} color={"red"}
                    style={styles(theme).icon}
                />
            </TouchableOpacity> */}
        </View>
    );
};





const styles = (theme) => StyleSheet.create({
    header: {
        backgroundColor: theme.primaryBackground,
        flexDirection: 'row',
        alignItems: 'center', justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 0,
        elevation: 10,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        zIndex: 1,
        height: 49,
        width: "100%",
    },
    headerIconText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        gap: 10,
    },
    headerleft: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',

    },
    headerText: {
        fontSize: 16,
        color: theme.primary,
        ...Theme.fontStyle.inter.semiBold
    },
    icon: {
        paddingHorizontal: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        paddingHorizontal: 1,
        paddingVertical: 8,
    },
    menuText: {
        flex: 1,
        fontSize: 13,
        color: theme.primaryText,
        ...Theme.fontStyle.inter.regular,
    },

});

export default Header;


const styless = (theme) => StyleSheet.create({
    header: {
        backgroundColor: theme.primaryBackground,
        flexDirection: 'row',
        alignItems: 'center', justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 0,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        elevation: 10,
        zIndex: 1,
        height: 45,
        width: "100%",
    },
    headerleft: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',

    },
    headerText: {
        fontSize: 18,
        color: theme.primaryText,
        ...Theme.fontStyle.inter.semiBold
    },

    icon: {
        paddingLeft: 5,
        marginRight: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        paddingHorizontal: 1,
        paddingVertical: 8,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        color: theme.primaryText,
        ...Theme.fontStyle.inter.regular,
    },

});

