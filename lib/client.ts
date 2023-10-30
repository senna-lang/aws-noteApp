import { MicroCMSQueries, createClient } from 'microcms-js-sdk';
import { Note } from '@/app/notes/type';

export const client = createClient({
  serviceDomain: 'ku4eu5oybh',
  apiKey: 'UbzvSvWqjuct7smSP6H2PC1qhuD0Tn2cDMlh'
});

//ノート一覧を取得
export const getNotesList = async () => {
  const noteLists = await client.getList<Note>({
    endpoint: 'notes-test2',
    customRequestInit: {
      cache: 'no-store'
    }
  });

  return noteLists;
};
//ノート詳細を取得
export const getDetailNote = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailNote = await client.getListDetail<Note>({
    endpoint: 'notes-test2',
    contentId,
    queries,
  });

  return detailNote;
};
