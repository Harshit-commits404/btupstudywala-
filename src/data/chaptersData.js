/**
 * Chapters dataset for BTEUP Study platform.
 *
 * Contains syllabus-accurate chapter structures.
 */

export const chaptersData = {
  'applied-physics-1': [
    {
      id: 'units-and-dimensions',
      number: '01',
      title: 'Units and Dimensions',
      duration: '6 Periods',
      subjectId: 'applied-physics-1',
      subjectName: 'Applied Physics - 1',
      semesterId: 1,
      description:
        'Need of measurement in engineering & science, fundamental and derived units, systems of units (FPS, CGS, SI), dimensions, principle of homogeneity, dimensional equations, applications, and limitations.',
      path: '/chapter/applied-physics-1/units-and-dimensions',
      sections: [
        { id: 'overview', title: 'Chapter Overview' },
        { id: 'sec-1-1', title: '1.1 Need of Measurement & Units' },
        { id: 'sec-1-2', title: '1.2 Dimensions & Dimensional Formulae' },
        { id: 'sec-1-3', title: '1.3 Principle of Homogeneity' },
        { id: 'sec-1-4', title: '1.4 Dimensional Equations & Applications' },
        { id: 'sec-1-5', title: '1.5 Limitations of Dimensional Analysis' },
        { id: 'exam-focus', title: 'Exam Focus (Definitions & PYQs)' },
        { id: 'quick-revision', title: 'Quick Revision' },
      ],
    },
  ],
};

/**
 * Get all chapters for a specific subject ID.
 * @param {string} subjectId
 * @returns {Array} List of chapters or empty array
 */
export const getChaptersBySubject = (subjectId) => {
  return chaptersData[subjectId] || [];
};

/**
 * Get a specific chapter by subject ID and chapter ID, or by chapter ID alone.
 * @param {string} subjectId
 * @param {string} chapterId
 * @returns {Object|null}
 */
export const getChapter = (subjectId, chapterId) => {
  if (subjectId && chapterId && chaptersData[subjectId]) {
    const found = chaptersData[subjectId].find((ch) => ch.id === chapterId);
    if (found) return found;
  }

  const targetId = chapterId || subjectId;
  for (const list of Object.values(chaptersData)) {
    const found = list.find((ch) => ch.id === targetId || ch.number === targetId);
    if (found) return found;
  }

  // Fallback for units-and-dimensions / ch-1
  if (targetId === 'units-and-dimensions' || targetId === 'ch-1' || targetId === '1') {
    return chaptersData['applied-physics-1'][0];
  }

  return null;
};
