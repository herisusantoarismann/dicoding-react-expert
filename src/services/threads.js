const getThreads = () => {
  return fetch(`${process.env.REACT_APP_API}/threads`);
};

const getDetailThread = (id) => {
  return fetch(`${process.env.REACT_APP_API}/threads/${id}`);
};

const getUsers = () => {
  return fetch(`${process.env.REACT_APP_API}/users`);
};

const getLeaderboards = () => {
  return fetch(`${process.env.REACT_APP_API}/leaderboards`);
};

const createThread = (data) => {
  const token = JSON.parse(localStorage.getItem('dicoding'));

  return fetch(`${process.env.REACT_APP_API}/threads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

const handleUpVotes = (id) => {
  const token = JSON.parse(localStorage.getItem('dicoding'));

  return fetch(`${process.env.REACT_APP_API}/threads/${id}/up-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const handleDownVotes = (id) => {
  const token = JSON.parse(localStorage.getItem('dicoding'));

  return fetch(`${process.env.REACT_APP_API}/threads/${id}/down-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const handleNeutralVotes = (id) => {
  const token = JSON.parse(localStorage.getItem('dicoding'));

  return fetch(`${process.env.REACT_APP_API}/threads/${id}/neutral-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const createComment = ({ id, data }) => {
  const token = JSON.parse(localStorage.getItem('dicoding'));

  return fetch(`${process.env.REACT_APP_API}/threads/${id}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

const handleUpComment = ({ threadId, commentId }) => {
  const token = JSON.parse(localStorage.getItem('dicoding'));

  console.log(threadId);

  return fetch(
    `${process.env.REACT_APP_API}/threads/${threadId}/comments/${commentId}/up-vote`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const handleDownComment = ({ threadId, commentId }) => {
  const token = JSON.parse(localStorage.getItem('dicoding'));

  return fetch(
    `${process.env.REACT_APP_API}/threads/${threadId}/comments/${commentId}/down-vote`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const handleNeutralComment = ({ threadId, commentId }) => {
  const token = JSON.parse(localStorage.getItem('dicoding'));

  return fetch(
    `${process.env.REACT_APP_API}/threads/${threadId}/comments/${commentId}/neutral-vote`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const ThreadsService = {
  getThreads,
  getDetailThread,
  getUsers,
  getLeaderboards,
  createThread,
  handleUpVotes,
  handleDownVotes,
  handleNeutralVotes,
  createComment,
  handleUpComment,
  handleDownComment,
  handleNeutralComment,
};

export default ThreadsService;
