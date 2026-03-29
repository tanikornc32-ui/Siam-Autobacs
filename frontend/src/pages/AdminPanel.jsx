import React, { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Assume firebase is initialized in this file
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

const AdminPanel = () => {
  const [staff, setStaff] = useState([]);
  const [news, setNews] = useState([]);
  const [newStaff, setNewStaff] = useState('');
  const [newNews, setNewNews] = useState('');

  useEffect(() => {
    const staffRef = collection(db, 'staff');
    const newsRef = collection(db, 'news');

    const unsubscribeStaff = onSnapshot(staffRef, (snapshot) => {
      const staffList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStaff(staffList);
    });

    const unsubscribeNews = onSnapshot(newsRef, (snapshot) => {
      const newsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNews(newsList);
    });

    return () => {
      unsubscribeStaff();
      unsubscribeNews();
    };
  }, []);

  const handleAddStaff = async () => {
    if(newStaff) {
      await addDoc(collection(db, 'staff'), { name: newStaff });
      setNewStaff('');
    }
  };

  const handleAddNews = async () => {
    if(newNews) {
      await addDoc(collection(db, 'news'), { content: newNews });
      setNewNews('');
    }
  };

  const handleDeleteStaff = async (id) => {
    await deleteDoc(doc(db, 'staff', id));
  };

  const handleDeleteNews = async (id) => {
    await deleteDoc(doc(db, 'news', id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Manage Staff</h2>
      <input 
        type="text" 
        value={newStaff} 
        onChange={(e) => setNewStaff(e.target.value)} 
        placeholder="Add new staff"
      />
      <button onClick={handleAddStaff}>Add Staff</button>
      <ul>
        {staff.map(member => (
          <li key={member.id}>
            {member.name}
            <button onClick={() => handleDeleteStaff(member.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Manage News</h2>
      <input 
        type="text" 
        value={newNews} 
        onChange={(e) => setNewNews(e.target.value)} 
        placeholder="Add new news"
      />
      <button onClick={handleAddNews}>Add News</button>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            {item.content}
            <button onClick={() => handleDeleteNews(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
