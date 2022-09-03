import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { getContacts } from "../../services/contacts";

const ContactsContext = React.createContext();

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [page, setPage] = useState([]);
    const [params, setParams] = useState({ _limit: 5, page: 1 });

    const fetchContacts = useCallback(async ({ query, page }) => {
        const _params = { ...params } // TODO: remove limit
        if (page) _params.page = page
        if (query) _params.q = query

        const { status, data } = await getContacts(_params);
        if (status === 200) {
            setContacts(data)
            setPage(page)
            setParams(params)
        } else {
            alert("Não foi possível carregar os contatos!")
        }
    }, [params]);

    useEffect(() => {
        fetchContacts({});
    }, [fetchContacts])



    return (
        <ContactsContext.Provider value={{ contacts, page, fetchContacts }}>
            {children}
        </ContactsContext.Provider>
    )
}

export const useContacts = () => React.useContext(ContactsContext)