import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import UsersTable from '@/components/UsersTable';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Stats />
          <UsersTable />
        </div>
      </main>
    </div>
  );
}

export default App;
