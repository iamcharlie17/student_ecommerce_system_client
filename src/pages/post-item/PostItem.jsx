import Footer from "../../components/Footer";
import PostItemForm from "../../components/forms/PostItemForm";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";

const PostItem = () => {
  const { user } = useAuth();
  return (
    <div>
      <Header />
      <div className="px-32 ">
        <div className=" bg-white">
          <div className="text-center py-8">
            <h1 className="text-xl font-bold">
              Welcome {user?.name}! Let's post an item.
            </h1>
            <div>
                <PostItemForm/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostItem;
