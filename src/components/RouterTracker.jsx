import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setItem } from '../utils/localStorage';

const RouterTracker = () => {
    const location = useLocation();

    useEffect(() => {
        setItem("lastPage", location.pathname)
    }, [location])
  return null;
}

export default RouterTracker