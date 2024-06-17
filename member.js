function skillsMember() {
  const member = document.querySelector('.skills-member');
  const memberName = document.querySelector('.skills-member-name');
  const memberRole = document.querySelector('.skills-member-role');
  const memberPhoto = document.querySelector('.skills-member-photo');

  // Member's data
  const members = [
    {
      name: 'John Doe',
      role: 'Web Developer',
      photo: 'img/member1.jpg'
    },
    {
      name: 'Jane Doe',
      role: 'Web Designer',
      photo: 'img/member2.jpg'
    }
  ];

  // Display the first member
  let memberIndex = 0;
  memberName.textContent = members[memberIndex].name;
  memberRole.textContent = members[memberIndex].role;
  memberPhoto.src = members[memberIndex].photo;

  // Switch members
  member.addEventListener('click', function() {
    memberIndex++;
    if (memberIndex > members.length - 1) {
      memberIndex = 0;
    }
    memberName.textContent = members[memberIndex].name;
    memberRole.textContent = members[memberIndex].role;
    memberPhoto.src = members[memberIndex].photo;
  });
}