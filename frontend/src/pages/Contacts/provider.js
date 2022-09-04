import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { getContacts } from "../../services/contacts";
import formateDate from "../../utils/formatDate";

const ContactsContext = React.createContext();

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [page, setPage] = useState([]);
    const [totalOfPages, setTotalOfPages] = useState(0);
    const [params, setParams] = useState({ page: 1 });

    const fetchContacts = useCallback(async ({ query, _page = 1 }) => {
        const _params = { ...params }
        if (_page) _params.page = _page
        if (query) {
            _params.q = query
            _params.page = 1
        }

        const { status, data } = await getContacts(_params);
        if (status === 200) {
            const totalPages = data.total / data.per_page
            const formattedContacts = data.records.map(contact => { return { ...contact, birthday: formateDate(contact.birthday) } });
            setTotalOfPages(totalPages)
            setContacts(formattedContacts)
            setPage(_page)
            setParams(params)
        } else {
            alert("Não foi possível carregar os contatos!")
        }
    }, [params]);

    useEffect(() => {
        fetchContacts({});
    }, [fetchContacts])



    return (
        <ContactsContext.Provider value={{ contacts, page, totalOfPages, fetchContacts }}>
            {children}
        </ContactsContext.Provider>
    )
}

export const useContacts = () => React.useContext(ContactsContext)